/* ---------------------------------------------------------------------------
 * Lynx Assistant — floating chat widget
 *
 * Self-contained IIFE. Drops a launcher button + chat popup onto whatever
 * page it's loaded on. Chat history persists across pages via localStorage
 * so navigating around the LynxPro site keeps the conversation going.
 *
 * Usage: include the matching CSS, then this script, anywhere on the page.
 * No HTML markup required.
 * --------------------------------------------------------------------------- */

(function () {
  if (window.__lynxWidgetLoaded) return;
  window.__lynxWidgetLoaded = true;

  // ---- Config -----------------------------------------------------------
  var WORKER_URL  = 'https://lynx-bot.dixonrand2017.workers.dev';
  var FULL_PAGE   = 'lynx-assistant.html';
  // Pull the logo from the repo via raw.githubusercontent.com so it works
  // regardless of how the site is deployed (User Pages, custom domain, etc).
  var LOGO_URL    = 'https://raw.githubusercontent.com/dixonrand/LynxPro/main/lynx-head-512-200x200.png';
  var STARTERS = [
    'Error aligning camera',
    'RadioLynx setup',
    'Compare Vision PRO X vs PRO',
    'Pre-meet day checklist',
    "What's in the Gold package?",
    'HyTek integration'
  ];
  var STORAGE_OPEN    = 'lynx-widget-open';
  var STORAGE_HISTORY = 'lynx-widget-history';

  // Resolve the full-page assistant relative to the current page so this
  // works whether we're at /index.html or /support/foo.html.
  function resolveFullPagePath() {
    var path = window.location.pathname;
    var inSubdir = /\/support\//.test(path);
    return (inSubdir ? '../' : '') + FULL_PAGE;
  }

  // ---- DOM construction --------------------------------------------------
  // If the lynx-head image fails to load, swap it out for a clean
  // text glyph so the launcher never shows a broken-image icon.
  function applyLogoFallback(imgEl) {
    imgEl.onerror = function () {
      var span = document.createElement('span');
      span.textContent = 'Lx';
      span.style.cssText = 'color:#fff;font-weight:800;font-size:22px;letter-spacing:.5px;font-family:Inter,system-ui,sans-serif';
      imgEl.replaceWith(span);
    };
  }

  function buildLauncher() {
    var btn = document.createElement('button');
    btn.className = 'lynx-widget-launcher';
    btn.id = 'lynxWidgetLauncher';
    btn.setAttribute('aria-label', 'Open Lynx Assistant');
    var img = document.createElement('img');
    img.src = LOGO_URL;
    img.alt = '';
    applyLogoFallback(img);
    btn.appendChild(img);
    return btn;
  }

  function buildPanel() {
    var panel = document.createElement('div');
    panel.className = 'lynx-widget-panel is-hidden';
    panel.id = 'lynxWidgetPanel';
    panel.innerHTML = [
      '<div class="lynx-widget-header">',
      '  <div class="lynx-widget-header-logo"><img src="' + LOGO_URL + '" alt=""></div>',
      '  <div class="lynx-widget-header-title">Lynx Assistant</div>',
      '  <span class="lynx-widget-header-beta">BETA</span>',
      '  <button class="lynx-widget-header-btn" id="lynxWidgetExpand" title="Open in full page" aria-label="Open in full page">&#8599;</button>',
      '  <button class="lynx-widget-header-btn" id="lynxWidgetClose" title="Close" aria-label="Close">&times;</button>',
      '</div>',
      '<div class="lynx-widget-welcome" id="lynxWidgetWelcome">',
      '  <div class="lynx-widget-welcome-icon"><img src="' + LOGO_URL + '" alt=""></div>',
      '  <h3>Lynx Assistant</h3>',
      '  <p>Ask anything about FinishLynx setup, troubleshooting, products, packages, or meet day tips.</p>',
      '  <div class="lynx-widget-welcome-chips" id="lynxWidgetChips"></div>',
      '</div>',
      '<div class="lynx-widget-messages" id="lynxWidgetMessages" hidden></div>',
      '<div class="lynx-widget-input-wrap">',
      '  <textarea class="lynx-widget-input" id="lynxWidgetInput" placeholder="Ask about FinishLynx..." rows="1"></textarea>',
      '  <button class="lynx-widget-send" id="lynxWidgetSend">Send</button>',
      '</div>',
      '<div class="lynx-widget-footer">Powered by Anthropic &middot; <a href="https://www.finishlynx.com/support" target="_blank" rel="noopener">finishlynx.com/support</a></div>'
    ].join('');
    return panel;
  }

  // ---- State persistence -------------------------------------------------
  function loadHistory() {
    try {
      var raw = localStorage.getItem(STORAGE_HISTORY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }
  function saveHistory(h) {
    try { localStorage.setItem(STORAGE_HISTORY, JSON.stringify(h)); } catch (e) {}
  }
  function setOpenState(open) {
    try { localStorage.setItem(STORAGE_OPEN, open ? '1' : '0'); } catch (e) {}
  }
  function isOpen() {
    try { return localStorage.getItem(STORAGE_OPEN) === '1'; } catch (e) { return false; }
  }

  // ---- Markdown formatter (mirrors lynx-assistant.html) ------------------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }

  function formatMarkdown(md) {
    if (!md) return '';
    var codeBlocks = [];
    md = md.replace(/```(\w*)\n([\s\S]*?)```/g, function (_, lang, code) {
      var i = codeBlocks.length;
      codeBlocks.push('<pre><code>' + esc(code.trim()) + '</code></pre>');
      return ' CB' + i + ' ';
    });
    md = md.replace(/^(#{1,6})\s+(.+?)\s*#*\s*$/gm, function (_, hashes, text) {
      var level = Math.min(hashes.length, 6);
      return '\n\n<h' + level + '>' + text.trim() + '</h' + level + '>\n\n';
    });
    md = md.replace(/^\s*([-*_])\1{2,}\s*$/gm, '\n\n<hr>\n\n');
    md = md.replace(/`([^`]+)`/g, function (_, c) { return '<code>' + esc(c) + '</code>'; });
    md = md.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    md = md.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    md = md.replace(/(^|[\s(])_([^_\n]+)_/g, '$1<em>$2</em>');
    md = md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, text, url) {
      var safe = /^(https?:|mailto:|#|\/)/.test(url) ? url : '#';
      return '<a href="' + safe + '" target="_blank" rel="noopener">' + text + '</a>';
    });

    var blocks = md.split(/\n\n+/);
    var html = '';
    blocks.forEach(function (block) {
      block = block.trim();
      if (!block) return;
      if (/^<(h[1-6]|hr|pre)\b/.test(block) || /^ CB\d+ $/.test(block)) { html += block; return; }
      var tLines = block.split('\n');
      if (tLines.length >= 2 && tLines[0].indexOf('|') !== -1 &&
          /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(tLines[1])) {
        var parseRow = function (line) {
          return line.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(function (c) { return c.trim(); });
        };
        var headerCells = parseRow(tLines[0]);
        var bodyRows = tLines.slice(2).filter(function (l) { return l.trim(); }).map(parseRow);
        html += '<table><thead><tr>';
        headerCells.forEach(function (c) { html += '<th>' + c + '</th>'; });
        html += '</tr></thead><tbody>';
        bodyRows.forEach(function (row) {
          html += '<tr>';
          row.forEach(function (c) { html += '<td>' + c + '</td>'; });
          html += '</tr>';
        });
        html += '</tbody></table>';
        return;
      }
      if (/^>\s?/.test(block) && block.split('\n').every(function (l) { return /^>\s?/.test(l) || !l.trim(); })) {
        var inner = block.split('\n').map(function (l) { return l.replace(/^>\s?/, ''); }).join('\n');
        html += '<blockquote>' + inner.replace(/\n/g, '<br>') + '</blockquote>';
        return;
      }
      if (/^\d+[\.\)]\s/.test(block)) {
        var items = block.split(/\n(?=\d+[\.\)]\s)/).filter(Boolean);
        html += '<ol>';
        items.forEach(function (li) { html += '<li>' + li.replace(/^\d+[\.\)]\s*/, '').replace(/\n/g, '<br>') + '</li>'; });
        html += '</ol>';
        return;
      }
      if (/^[-*]\s/.test(block)) {
        var items2 = block.split(/\n(?=[-*]\s)/).filter(Boolean);
        html += '<ul>';
        items2.forEach(function (li) { html += '<li>' + li.replace(/^[-*]\s*/, '').replace(/\n/g, '<br>') + '</li>'; });
        html += '</ul>';
        return;
      }
      html += '<p>' + block.replace(/\n/g, '<br>') + '</p>';
    });
    html = html.replace(/ CB(\d+) /g, function (_, i) { return codeBlocks[+i]; });
    return html;
  }

  // ---- Wire up the widget ------------------------------------------------
  function init() {
    var launcher = buildLauncher();
    var panel = buildPanel();
    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    // Wire fallbacks for the header + welcome logo images too
    panel.querySelectorAll('.lynx-widget-header-logo img, .lynx-widget-welcome-icon img')
      .forEach(applyLogoFallback);

    var welcomeEl  = panel.querySelector('#lynxWidgetWelcome');
    var messagesEl = panel.querySelector('#lynxWidgetMessages');
    var chipsEl    = panel.querySelector('#lynxWidgetChips');
    var inputEl    = panel.querySelector('#lynxWidgetInput');
    var sendBtn    = panel.querySelector('#lynxWidgetSend');
    var expandBtn  = panel.querySelector('#lynxWidgetExpand');
    var closeBtn   = panel.querySelector('#lynxWidgetClose');

    var history = loadHistory();
    var streaming = false;

    // Render starter chips
    STARTERS.forEach(function (label) {
      var b = document.createElement('button');
      b.className = 'lynx-widget-chip';
      b.textContent = label;
      b.addEventListener('click', function () {
        inputEl.value = label;
        send();
      });
      chipsEl.appendChild(b);
    });

    // Restore prior history if any
    if (history.length) {
      welcomeEl.hidden = true;
      messagesEl.hidden = false;
      history.forEach(function (m) { renderMessage(m.role, m.content); });
    }

    // Restore open state
    if (isOpen()) openPanel();

    // ---- Event handlers --------------------------------------------------
    launcher.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
    expandBtn.addEventListener('click', function () {
      window.location.href = resolveFullPagePath();
    });
    sendBtn.addEventListener('click', send);
    inputEl.addEventListener('input', autoResize);
    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });

    // ---- Functions -------------------------------------------------------
    function autoResize() {
      inputEl.style.height = 'auto';
      inputEl.style.height = Math.min(inputEl.scrollHeight, 96) + 'px';
    }

    function openPanel() {
      panel.classList.remove('is-hidden');
      launcher.classList.add('is-hidden');
      setOpenState(true);
      setTimeout(function () { inputEl.focus(); }, 80);
    }

    function closePanel() {
      panel.classList.add('is-hidden');
      launcher.classList.remove('is-hidden');
      setOpenState(false);
    }

    function renderMessage(role, content) {
      var wrap = document.createElement('div');
      wrap.className = 'lynx-widget-msg ' + role;
      var bubble = document.createElement('div');
      bubble.className = 'lynx-widget-bubble';
      if (role === 'user') {
        bubble.textContent = content;
      } else {
        bubble.innerHTML = formatMarkdown(content);
      }
      wrap.appendChild(bubble);
      messagesEl.appendChild(wrap);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return bubble;
    }

    function showTyping() {
      var t = document.createElement('div');
      t.className = 'lynx-widget-typing';
      t.id = 'lynxWidgetTyping';
      t.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
      messagesEl.appendChild(t);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
    function hideTyping() {
      var t = document.getElementById('lynxWidgetTyping');
      if (t) t.remove();
    }

    function send() {
      var text = inputEl.value.trim();
      if (!text || streaming) return;

      welcomeEl.hidden = true;
      messagesEl.hidden = false;

      history.push({ role: 'user', content: text });
      saveHistory(history);
      renderMessage('user', text);
      inputEl.value = '';
      autoResize();
      callAPI();
    }

    function callAPI() {
      streaming = true;
      sendBtn.disabled = true;
      showTyping();

      fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, max_tokens: 2048 })
      })
      .then(function (res) {
        hideTyping();
        if (!res.ok) throw new Error('API ' + res.status);

        var bubble = renderMessage('assistant', '');
        var fullText = '';
        var pending = '';
        var streamDone = false;

        // Typewriter — reveal characters smoothly even though the Worker
        // sends the full response in one SSE delta.
        var ticker = setInterval(function () {
          if (pending.length) {
            var chunk = pending.slice(0, Math.max(2, Math.ceil(pending.length / 18)));
            fullText += chunk;
            pending = pending.slice(chunk.length);
            bubble.innerHTML = formatMarkdown(fullText);
            messagesEl.scrollTop = messagesEl.scrollHeight;
          } else if (streamDone) {
            clearInterval(ticker);
            history.push({ role: 'assistant', content: fullText });
            saveHistory(history);
            streaming = false;
            sendBtn.disabled = false;
          }
        }, 18);

        var reader = res.body.getReader();
        var decoder = new TextDecoder();
        var buffer = '';

        function read() {
          reader.read().then(function (result) {
            if (result.done) { streamDone = true; return; }
            buffer += decoder.decode(result.value, { stream: true });
            var lines = buffer.split('\n');
            buffer = lines.pop();
            lines.forEach(function (line) {
              if (!line.startsWith('data: ')) return;
              var data = line.slice(6).trim();
              if (data === '[DONE]') return;
              try {
                var evt = JSON.parse(data);
                if (evt.type === 'content_block_delta' && evt.delta && evt.delta.text) {
                  pending += evt.delta.text;
                }
              } catch (e) {}
            });
            read();
          }).catch(function () { streamDone = true; });
        }
        read();
      })
      .catch(function (err) {
        hideTyping();
        renderMessage('assistant', 'Sorry, something went wrong: ' + err.message);
        streaming = false;
        sendBtn.disabled = false;
      });
    }

    // Expose a tiny API in case other code wants to drive the widget
    window.LynxAssistant = {
      open: openPanel,
      close: closePanel,
      ask: function (text) {
        openPanel();
        inputEl.value = text;
        send();
      },
      reset: function () {
        history = [];
        saveHistory(history);
        messagesEl.innerHTML = '';
        messagesEl.hidden = true;
        welcomeEl.hidden = false;
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
