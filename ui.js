/* ===========================================================================
 * DSH UI — page catalogue.
 *
 * Every page is a pure function returning markup, so the shared chrome (sidebar,
 * top bar, composer, rail) is written once and cannot drift between pages. The
 * catalogue mirrors the surfaces the two reference products actually have, not
 * a per-page rewrite of the same three cards.
 * ======================================================================== */

const I = {
  plus: 'M12 5v14M5 12h14',
  search: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-4.2-4.2',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 7v5l3.5 2',
  gear: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 4.6a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9 2 2 0 1 1 0 4 1.7 1.7 0 0 0-1.5.5Z',
  folder: 'M3 7.5A2 2 0 0 1 5 5.5h4l2 2.5h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z',
  chevronDown: 'M6 9l6 6 6-6',
  chevronLeft: 'M14.5 5.5 8 12l6.5 6.5',
  chevronRight: 'M9.5 5.5 16 12l-6.5 6.5',
  check: 'M4.5 12.5l5 5 10-11',
  more: 'M5 12h.01M12 12h.01M19 12h.01',
  send: 'M12 19V5M6 11l6-6 6 6',
  stop: 'M7 7h10v10H7z',
  terminal: 'M4 6h16v12H4zM7 10l3 2-3 2M13 14h4',
  file: 'M6 3h7l5 5v13H6zM13 3v5h5',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3.5 9h17M3.5 15h17M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z',
  branch: 'M7 4v9a3 3 0 0 0 3 3h4M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  panel: 'M4 5h16v14H4zM14 5v14',
  x: 'M6 6l12 12M18 6L6 18',
  mic: 'M12 3.5a2.5 2.5 0 0 1 2.5 2.5v5.5a2.5 2.5 0 0 1-5 0V6A2.5 2.5 0 0 1 12 3.5ZM6.5 11.5a5.5 5.5 0 0 0 11 0M12 17.5v3',
  at: 'M16 12a4 4 0 1 1-4-4M20 12a8 8 0 1 1-3.2-6.4M16 8v5a2 2 0 0 0 4 0',
  slash: 'M15 4 9 20',
  sparkle: 'M12 4l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z',
  puzzle: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  bell: 'M6 16V11a6 6 0 1 1 12 0v5l1.5 2.5H4.5ZM10 20.5a2 2 0 0 0 4 0',
  user: 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM4.5 20a7.5 7.5 0 0 1 15 0',
  layers: 'M12 3l8 4.5-8 4.5-8-4.5ZM4 12l8 4.5 8-4.5M4 16.5 12 21l8-4.5',
  play: 'M8 5l11 7-11 7Z',
  pause: 'M8 5v14M16 5v14',
  trash: 'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z',
  edit: 'M4 20h4l10-10-4-4L4 16ZM14 6l4 4',
  copy: 'M9 9h10v11H9zM5 15V4h11v2',
};

const $ = (name) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${I[name]}"/></svg>`;

/* ------------------------------------------------------------------ chrome */

const SESSIONS = [
  { t: '给会话列表加归档', time: '2m', cur: true },
  { t: '修复拖拽排序抖动', time: '1h' },
  { t: '把设置页拆成两级', time: '3h' },
];
const WORKSPACES = [
  { t: '流萤漫剧', open: true, active: true },
  { t: '插件推广' },
  { t: 'dsh 手机版 UI' },
  { t: '语音操作' },
];

const sideBar = ({ active = 'sessions' } = {}) => `
  <aside class="side">
    <div class="side-top">
      <div class="brand">
        <span class="brand-mark">DS</span>
        <span class="col">
          <span class="brand-name">DSH Local</span>
          <span class="brand-ver">0.2.1-rc.2</span>
        </span>
      </div>
      <div class="grow"></div>
      <button class="side-icon-btn" aria-label="收起侧栏">${$('panel')}</button>
    </div>
    <div class="side-actions">
      <button class="new-session">${$('plus')}<span>新建会话</span></button>
    </div>
    <nav class="side-nav">
      <button class="side-nav-item" ${active === 'plugins' ? 'aria-current="true"' : ''}>${$('puzzle')}<span>插件</span></button>
      <button class="side-nav-item" ${active === 'automation' ? 'aria-current="true"' : ''}>${$('clock')}<span>自动化任务</span></button>
    </nav>
    <div class="side-scroll">
      <div class="side-section">
        <div class="side-section-head">
          <span class="grow">工作区</span>
          <button class="side-icon-btn" aria-label="搜索会话">${$('search')}</button>
          <button class="side-icon-btn" aria-label="显示选项">${$('more')}</button>
          <button class="side-icon-btn" aria-label="新建工作区">${$('plus')}</button>
        </div>
        ${WORKSPACES.map((w) => `
          <button class="tree-row" ${w.active ? 'aria-current="true"' : ''}>
            <span class="dir">${$('folder')}</span>
            <span class="grow">${w.t}</span>
          </button>
          ${w.open ? `<div class="tree-sub">
            ${SESSIONS.map((s) => `
              <button class="tree-row" ${s.cur ? 'aria-current="true"' : ''}>
                <span class="grow">${s.t}</span>
                <span class="time">${s.time}</span>
              </button>`).join('')}
          </div>` : ''}
        `).join('')}
      </div>
    </div>
    <div class="side-foot">
      <button class="account-row">
        <span class="avatar">李</span>
        <span class="account-meta">
          <span class="account-name">leef</span>
          <span class="account-plan">Pro · 本机运行</span>
        </span>
        ${$('chevronDown')}
      </button>
    </div>
  </aside>`;

const topBar = ({ title = '给会话列表加归档', sub = '流萤漫剧', actions = true } = {}) => `
  <header class="topbar">
    <div class="crumb">
      <span class="crumb-title">${title}</span>
      <span class="crumb-sub">· ${sub}</span>
    </div>
    <div class="topbar-spacer"></div>
    ${actions ? `
      <button class="topbar-btn" aria-pressed="true">${$('panel')}<span>变更</span></button>
      <button class="topbar-btn">${$('terminal')}<span>终端</span></button>
      <button class="topbar-btn">${$('globe')}<span>预览</span></button>
      <button class="topbar-btn" aria-label="更多">${$('more')}</button>
    ` : ''}
  </header>`;

const composer = ({ text = '', ph = '描述你想构建的内容，/ 命令，@ 引用文件或会话', busy = false, menu = '' } = {}) => `
  <div class="composer-wrap">
    <div class="composer" style="position:relative">
      ${menu}
      <div class="composer-card">
        <div class="composer-input">${text ? `${text}<span class="caret"></span>` : `<span class="ph">${ph}</span>`}</div>
        <div class="composer-row">
          <button class="pill pill-icon" aria-label="添加文件或运行命令">${$('plus')}</button>
          <button class="pill">${$('folder')}<span>流萤漫剧</span></button>
          <button class="pill">${$('sparkle')}<span>标准模式</span>${$('chevronDown')}</button>
          <div class="composer-spacer"></div>
          <button class="pill">${$('target')}<span>Workspace Write</span>${$('chevronDown')}</button>
          <button class="pill"><span>DeepSeek-V4.1</span><span class="chip">1017</span>${$('chevronDown')}</button>
          <button class="pill pill-icon" aria-label="语音">${$('mic')}</button>
          <button class="send ${busy ? 'send-stop' : ''}" aria-label="${busy ? '停止' : '发送'}">${$(busy ? 'stop' : 'send')}</button>
        </div>
      </div>
      <div class="hint-row">
        <span><kbd>Enter</kbd> 发送</span>
        <span><kbd>Shift</kbd>+<kbd>Enter</kbd> 换行</span>
        <span><kbd>@</kbd> 引用</span>
        <span><kbd>Cmd K</kbd> 命令</span>
      </div>
    </div>
  </div>`;

const userTurn = (text) => `
  <div class="turn turn-user"><div class="bubble-user">${text}</div></div>`;

const aiTurn = (body) => `
  <div class="turn">
    <div class="who"><span class="who-mark">D</span><span>DeepSeek · 2 分钟前</span></div>
    ${body}
  </div>`;

const toolCard = (name, arg, body, { state = 'ok' } = {}) => `
  <div class="tool-card">
    <div class="tool-head">
      ${$('terminal')}
      <span class="t">${name}</span>
      <span class="muted">{ ${arg} }</span>
      <div class="grow"></div>
      <span class="chip ${state === 'ok' ? 'chip-ok' : ''}">${state === 'ok' ? '完成' : '运行中'}</span>
    </div>
    <div class="tool-body">${body}</div>
  </div>`;

const diffBlock = () => `
  <div class="tool-card">
    <div class="tool-head">
      ${$('branch')}
      <span class="t">编辑 · src/session/archive.ts</span>
      <div class="grow"></div>
      <span class="chip chip-ok">+38</span><span class="chip chip-bad">−4</span>
    </div>
    <div class="diff">
      <div class="diff-row diff-add"><span class="diff-gutter">42</span><span class="diff-code">+export async function archiveSession(id: string) {</span></div>
      <div class="diff-row diff-add"><span class="diff-gutter">43</span><span class="diff-code">+  const row = await db.sessions.get(id)</span></div>
      <div class="diff-row diff-add"><span class="diff-gutter">44</span><span class="diff-code">+  if (!row) throw new NotFoundError(id)</span></div>
      <div class="diff-row"><span class="diff-gutter">45</span><span class="diff-code"> </span></div>
      <div class="diff-row diff-del"><span class="diff-gutter">46</span><span class="diff-code">-  return db.sessions.delete(id)</span></div>
      <div class="diff-row diff-add"><span class="diff-gutter">46</span><span class="diff-code">+  return db.sessions.update(id, { archivedAt: Date.now() })</span></div>
      <div class="diff-row diff-add"><span class="diff-gutter">47</span><span class="diff-code">+}</span></div>
    </div>
  </div>`;

/* ------------------------------------------------------------------- pages */

const pcShell = ({ side, main, rail = '' }) => `
  <div class="device device-pc">
    ${side}
    <div class="main" style="flex:1;min-width:0">
      ${main}
    </div>
    ${rail}
  </div>`;

const conversationPage = ({ busy = false, menu = '', text = '', railMode = false } = {}) => pcShell({
  rail: railMode ? rail() : '',
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="thread">
        <div class="thread-inner">
          ${userTurn('会话列表没法归档，删了就找不回来了。加一个归档，别直接删。')}
          ${aiTurn(`
            <div class="prose">
              <p>我把删除改成软归档：写 <code>archivedAt</code>，列表默认过滤，<code>Cmd Z</code> 可恢复。先看一下现有的删除路径。</p>
            </div>
            ${toolCard('grep', '"sessions.delete" src', `
              <div class="ln">src/session/store.ts:128   <span class="dim">await</span> db.sessions.delete(id)</div>
              <div class="ln">src/api/session.ts:74      <span class="dim">await</span> store.remove(id)</div>
              <div class="ln dim">2 处匹配</div>`)}
            ${toolCard('bash', 'pnpm test src/session', `
              <div class="ln">✓ store.test.ts <span class="dim">(14)</span></div>
              <div class="ln">✓ api/session.test.ts <span class="dim">(9)</span></div>
              <div class="ln dim">23 passed in 1.82s</div>`)}
            ${diffBlock()}
            <div class="prose mt-12">
              <p>改完了：现在 <code>archiveSession</code> 只写时间戳，列表与搜索都按 <code>archivedAt == null</code> 过滤，恢复走同一个写入。</p>
            </div>
          `)}
        </div>
      </div>
    </div>
    ${composer({ text, busy, menu })}
  `,
});

const rail = (tab = '变更') => `
  <aside class="rail">
    <div class="rail-head">
      <div class="rail-tabs">
        ${['变更', '运行', '上下文'].map((t) => `<button class="rail-tab" ${t === tab ? 'aria-selected="true"' : ''}>${t}</button>`).join('')}
      </div>
      <div class="grow"></div>
      <button class="side-icon-btn" aria-label="收起">${$('x')}</button>
    </div>
    <div class="rail-body">
      <div class="rail-card">
        <h4>本次变更</h4>
        <div class="kv"><span class="k">文件</span><span class="v">3</span></div>
        <div class="kv"><span class="k">新增</span><span class="v add">+64</span></div>
        <div class="kv"><span class="k">删除</span><span class="v del">−11</span></div>
        <div class="mt-8" style="font-family:var(--mono);font-size:11.5px;color:var(--ink-2)">
          <div>src/session/archive.ts <span class="chip chip-ok">新增</span></div>
          <div class="mt-4">src/session/store.ts <span class="chip">修改</span></div>
          <div class="mt-4">src/api/session.ts <span class="chip">修改</span></div>
        </div>
      </div>
      <div class="rail-card">
        <h4>运行状态</h4>
        <div class="row gap-8"><span class="chip chip-ok">测试通过</span><span class="muted t-12">23 passed</span></div>
        <div class="mt-8 bar"><i style="width:100%"></i></div>
        <div class="kv mt-8"><span class="k">耗时</span><span class="v">1.82s</span></div>
        <div class="kv"><span class="k">子代理</span><span class="v">0</span></div>
      </div>
      <div class="rail-card">
        <h4>上下文</h4>
        <div class="kv"><span class="k">已用</span><span class="v">62k / 200k</span></div>
        <div class="mt-8 bar"><i style="width:31%"></i></div>
        <div class="kv mt-8"><span class="k">文件引用</span><span class="v">7</span></div>
        <div class="kv"><span class="k">压缩</span><span class="v">0</span></div>
      </div>
    </div>
  </aside>`;

const popPlus = () => `
  <div class="pop" style="position:absolute;left:0;bottom:112px;z-index:5">
    <div class="pop-label">添加</div>
    <button class="pop-item">${$('file')}<span class="grow">文件与文件夹</span><span class="meta">@</span></button>
    <button class="pop-item">${$('sparkle')}<span class="grow">技能</span></button>
    <button class="pop-item">${$('puzzle')}<span class="grow">插件</span></button>
    <button class="pop-item">${$('globe')}<span class="grow">浏览器连接</span></button>
    <div class="pop-sep"></div>
    <button class="pop-item">${$('terminal')}<span class="grow">运行命令</span><span class="meta">/</span></button>
  </div>`;

const popAt = () => `
  <div class="pop pop-lg" style="position:absolute;left:0;bottom:112px;z-index:5">
    <div class="pop-label">引用文件 · 流萤漫剧</div>
    <button class="pop-item" style="background:var(--fill)">${$('file')}<span class="grow">src/session/archive.ts</span><span class="meta">刚编辑</span></button>
    <button class="pop-item">${$('file')}<span class="grow">src/session/store.ts</span></button>
    <button class="pop-item">${$('file')}<span class="grow">tests/session/store.test.ts</span></button>
    <div class="pop-sep"></div>
    <div class="pop-label">会话</div>
    <button class="pop-item">${$('layers')}<span class="grow">修复拖拽排序抖动</span><span class="meta">1h</span></button>
  </div>`;

const popSlash = () => `
  <div class="pop pop-lg" style="position:absolute;left:0;bottom:112px;z-index:5">
    <div class="pop-label">命令</div>
    <button class="pop-item">${$('target')}<span class="grow">/plan</span><span class="meta">进入计划模式</span></button>
    <button class="pop-item">${$('layers')}<span class="grow">/compact</span><span class="meta">压缩上下文</span></button>
    <button class="pop-item">${$('gear')}<span class="grow">/model</span><span class="meta">切换模型</span></button>
    <button class="pop-item">${$('user')}<span class="grow">/permission</span><span class="meta">权限模式</span></button>
  </div>`;

const approvalPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="thread">
        <div class="thread-inner">
          ${userTurn('把测试也跑一遍，顺便把 e2e 打开。')}
          ${aiTurn(`
            <div class="prose"><p>这一步要执行会写文件的命令，需要你确认。</p></div>
            <div class="card card-pad mt-12" style="max-width:640px">
              <div class="row gap-8"><span class="chip chip-warn">等待授权</span><span class="muted t-12">bash</span></div>
              <div class="mono mt-12" style="background:var(--fill);padding:10px 12px;border-radius:10px">pnpm test -- --e2e --update-snapshots</div>
              <div class="mt-12 t-12 sec">将写入 <span class="mono">tests/e2e/__snapshots__/</span> 下 6 个文件。<br>这是工作区内的写入，不会访问网络。</div>
              <div class="row gap-8 mt-16">
                <button class="btn btn-primary">允许一次</button>
                <button class="btn">本次会话都允许</button>
                <button class="btn btn-ghost">拒绝</button>
              </div>
            </div>
          `)}
        </div>
      </div>
    </div>
    ${composer({ ph: '等待授权…' })}
  `,
});

const askPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="thread">
        <div class="thread-inner">
          ${userTurn('归档的会话还要出现在搜索里吗？')}
          ${aiTurn(`
            <div class="prose"><p>有两种合理做法，差别只在搜索结果里露不露出来：</p></div>
            <div class="card card-pad mt-12" style="max-width:640px">
              <div class="row gap-8"><span class="chip chip-info">需要你选择</span><span class="muted t-12">1 / 2</span></div>
              <div class="mt-12">
                <button class="pop-item" style="height:auto;padding:10px;background:var(--fill);width:100%">
                  <span class="col" style="align-items:flex-start;gap:2px">
                    <span style="font-weight:550">搜索里仍然出现，带「已归档」标签</span>
                    <span class="t-12 muted">归档只是从默认列表隐藏，历史仍可被检索到</span>
                  </span>
                  ${$('check')}
                </button>
                <button class="pop-item mt-8" style="height:auto;padding:10px;width:100%;align-items:flex-start">
                  <span class="col" style="align-items:flex-start;gap:2px">
                    <span style="font-weight:550">完全不出现在搜索里</span>
                    <span class="t-12 muted">需要额外的「显示归档」开关才能找回</span>
                  </span>
                </button>
              </div>
              <div class="row gap-8 mt-16">
                <button class="btn btn-primary">就这样</button>
                <button class="btn btn-ghost">再想想</button>
              </div>
            </div>
          `)}
        </div>
      </div>
    </div>
    ${composer({})}
  `,
});

const planPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '计划 · 归档与恢复' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <span class="chip chip-info">计划模式</span>
          <span class="pane-title">归档与恢复</span>
          <div class="grow"></div>
          <button class="btn btn-sm">转到实现</button>
        </div>
        <div class="pane-body">
          <div class="form" style="max-width:760px">
            <h2>把「删除会话」改成「归档会话」</h2>
            <p class="lead">目标：删掉的东西可以找回，默认列表干净，历史仍可检索。</p>
            <div class="card card-pad mb-12">
              <div class="row gap-8 mb-8"><span class="chip">1</span><b>数据层</b><div class="grow"></div><span class="chip chip-ok">+38 −4</span></div>
              <div class="t-13 sec"><span class="mono">src/session/archive.ts</span> 新增 <span class="mono">archiveSession</span> / <span class="mono">restoreSession</span>，写 <span class="mono">archivedAt</span>，不删行。</div>
            </div>
            <div class="card card-pad mb-12">
              <div class="row gap-8 mb-8"><span class="chip">2</span><b>查询过滤</b><div class="grow"></div><span class="chip chip-ok">+12 −3</span></div>
              <div class="t-13 sec"><span class="mono">listSessions</span> 与 <span class="mono">search</span> 默认加 <span class="mono">archivedAt == null</span>；搜索传 <span class="mono">includeArchived</span> 可覆盖。</div>
            </div>
            <div class="card card-pad mb-12">
              <div class="row gap-8 mb-8"><span class="chip">3</span><b>界面</b><div class="grow"></div><span class="chip chip-warn">待确认</span></div>
              <div class="t-13 sec">行内动作从「删除」换成「归档」，加一次性 <span class="mono">Cmd Z</span> 撤销条。</div>
            </div>
            <div class="card card-pad">
              <div class="row gap-8 mb-8"><span class="chip">4</span><b>验证</b></div>
              <div class="t-13 sec">单测覆盖归档 / 恢复 / 幂等；e2e 覆盖列表隐藏与搜索可见。</div>
            </div>
            <div class="form-actions">
              <button class="btn">调整计划</button>
              <button class="btn btn-primary">开始实现</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const runPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '运行轨迹' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <span class="pane-title">本次运行</span>
          <span class="chip chip-ok">已完成</span>
          <div class="grow"></div>
          <span class="muted t-12 mono">12.4s · 8 步 · 6 次工具调用</span>
        </div>
        <div class="pane-body">
          <div class="form" style="max-width:820px">
            ${[
              ['读取上下文', 'grep · sqlite → 2 处匹配', 'ok'],
              ['阅读文件', 'store.ts · api/session.ts · 214 行', 'ok'],
              ['写实现', 'archive.ts 新建 · +38 −4', 'ok'],
              ['跑测试', '23 passed · 1.82s', 'ok'],
              ['自检', '类型检查通过 · 无未使用导出', 'ok'],
            ].map(([t, d, s], i) => `
              <div class="row gap-12" style="padding:10px 0;border-bottom:1px solid var(--line-2)">
                <span class="chip">${i + 1}</span>
                <div class="col" style="gap:2px">
                  <b class="t-13">${t}</b>
                  <span class="t-12 muted mono">${d}</span>
                </div>
                <div class="grow"></div>
                <span class="chip chip-ok">${s === 'ok' ? '完成' : s}</span>
              </div>`).join('')}
            <div class="mt-16 card card-pad" style="background:var(--panel-2)">
              <div class="row gap-8"><span class="chip chip-info">模型调用</span><span class="t-12 muted">3 次 · 62k 输入 · 4.1k 输出 · 约为 0.8 元</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const agentsPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '子代理' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head"><span class="pane-title">3 个子代理</span><div class="grow"></div><button class="btn btn-sm btn-primary">新建</button></div>
        <div class="pane-body p-16">
          ${[
            ['测试补全', '补齐 archive 的边界用例', '运行中', 'warn', '2 分钟'],
            ['文档核对', '检查 README 里的删除语义描述', '已完成', 'ok', '4 分钟'],
            ['依赖审计', '确认没有新增依赖', '已完成', 'ok', '1 分钟'],
          ].map(([t, d, s, k, time]) => `
            <div class="card card-pad mb-12">
              <div class="row gap-10">
                <span class="who-mark">A</span>
                <div class="col" style="gap:2px">
                  <b class="t-13">${t}</b>
                  <span class="t-12 muted">${d}</span>
                </div>
                <div class="grow"></div>
                <span class="chip chip-${k}">${s}</span>
                <span class="t-12 muted mono">${time}</span>
                <button class="btn btn-sm">查看</button>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `,
});

const diffPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <span class="pane-title">变更</span>
          <span class="chip">3 个文件</span>
          <div class="grow"></div>
          <button class="btn btn-sm">逐行评论</button>
          <button class="btn btn-sm btn-primary">提交反馈</button>
        </div>
        <div class="pane-body">
          <div class="diff-file">${$('file')}<span>src/session/archive.ts</span><span class="chip chip-ok">新增</span></div>
          <div class="diff">
            ${Array.from({ length: 18 }, (_, i) => {
              const n = i + 1;
              const rows = {
                1: 'import { db } from "../db"',
                2: 'import { NotFoundError } from "../errors"',
                3: '',
                4: 'export async function archiveSession(id: string) {',
                5: '  const row = await db.sessions.get(id)',
                6: '  if (!row) throw new NotFoundError(id)',
                7: '',
                8: '  return db.sessions.update(id, { archivedAt: Date.now() })',
                9: '}',
                10: '',
                11: 'export async function restoreSession(id: string) {',
                12: '  return db.sessions.update(id, { archivedAt: null })',
                13: '}',
              };
              const text = rows[n] ?? '';
              const cls = n >= 4 && n <= 13 ? 'diff-add' : '';
              return `<div class="diff-row ${cls}"><span class="diff-gutter">${n}</span><span class="diff-code">${cls ? '+' : ' '}${escapeHtml(text)}</span></div>`;
            }).join('')}
          </div>
          <div class="diff-file">${$('file')}<span>src/session/store.ts</span><span class="chip">修改</span></div>
          <div class="diff">
            <div class="diff-row"><span class="diff-gutter">126</span><span class="diff-code"> export async function remove(id: string) {</span></div>
            <div class="diff-row diff-del"><span class="diff-gutter">127</span><span class="diff-code">-  await db.sessions.delete(id)</span></div>
            <div class="diff-row diff-add"><span class="diff-gutter">127</span><span class="diff-code">+  await archiveSession(id)</span></div>
            <div class="diff-row"><span class="diff-gutter">128</span><span class="diff-code"> }</span></div>
          </div>
        </div>
      </div>
    </div>
  `,
  rail: rail(),
});

const browserPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          ${$('globe')}
          <div style="flex:1;height:28px;border-radius:8px;background:var(--fill);display:flex;align-items:center;padding:0 10px;font-family:var(--mono);font-size:11.5px;color:var(--ink-2)">http://localhost:5173/sessions</div>
          <button class="side-icon-btn" aria-label="刷新">${$('play')}</button>
        </div>
        <div class="pane-body" style="background:var(--panel-2)">
          <div class="p-24">
            <div class="card" style="overflow:hidden">
              <div class="row gap-8 p-14" style="border-bottom:1px solid var(--line-2)">
                <span class="brand-mark" style="width:20px;height:20px;font-size:10px">DS</span>
                <b class="t-13">会话</b>
                <div class="grow"></div>
                <div style="width:180px;height:26px;border-radius:7px;background:var(--fill)"></div>
              </div>
              ${[
                ['给会话列表加归档', '2 分钟前', true],
                ['修复拖拽排序抖动', '1 小时前', false],
                ['把设置页拆成两级', '3 小时前', false],
                ['归档的快捷键', '昨天', false],
              ].map(([t, time, cur]) => `
                <div class="row gap-10" style="padding:12px 14px;border-bottom:1px solid var(--line-2);${cur ? 'background:var(--panel-2)' : ''}">
                  <div class="col" style="gap:2px">
                    <b class="t-13">${t}</b>
                    <span class="t-11 muted">${time}</span>
                  </div>
                  <div class="grow"></div>
                  <span class="chip">已归档</span>
                </div>`).join('')}
            </div>
            <div class="t-11 muted mt-8" style="text-align:center">这是被代理的本地预览；交互与原页面一致</div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const terminalPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          ${$('terminal')}<span class="pane-title">bash</span>
          <span class="chip chip-ok">连接中</span>
          <div class="grow"></div>
          <button class="btn btn-sm btn-ghost">重启</button>
          <button class="btn btn-sm btn-ghost">关闭</button>
        </div>
        <div class="pane-body" style="padding:0">
          <div class="term">
            <div><span class="p">~/流萤漫剧 $</span> <span class="c">pnpm test src/session</span></div>
            <div class="o">&nbsp;</div>
            <div class="o"> RUN  v2.1.4 /Users/leef/流萤漫剧</div>
            <div class="o">&nbsp;</div>
            <div class="o"> ✓ src/session/store.test.ts <span class="dim">(14 tests)</span></div>
            <div class="o"> ✓ src/session/archive.test.ts <span class="dim">(9 tests)</span></div>
            <div class="o"> ✓ src/api/session.test.ts <span class="dim">(6 tests)</span></div>
            <div class="o">&nbsp;</div>
            <div class="o"> Test Files  <span style="color:#8fd6a8">3 passed</span> (3)</div>
            <div class="o">      Tests  <span style="color:#8fd6a8">29 passed</span> (29)</div>
            <div class="o">   Duration  1.82s</div>
            <div class="o">&nbsp;</div>
            <div><span class="p">~/流萤漫剧 $</span> <span class="c">git status --short</span></div>
            <div class="o"> M src/session/store.ts</div>
            <div class="o"> M src/api/session.ts</div>
            <div class="o">?? src/session/archive.ts</div>
            <div><span class="p">~/流萤漫剧 $</span> <span class="caret" style="background:#e8e4da"></span></div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const filesPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar()}
    <div class="content">
      <div class="pane" style="flex-direction:row">
        <div class="file-tree">
          <div class="ft-row"><span class="dir">${$('chevronDown')}</span><span>src</span></div>
          <div style="margin-left:12px">
            <div class="ft-row"><span class="dir">${$('chevronDown')}</span><span>session</span></div>
            <div style="margin-left:12px">
              <button class="ft-row" aria-current="true">${$('file')}<span>archive.ts</span></button>
              <button class="ft-row">${$('file')}<span>store.ts</span></button>
              <button class="ft-row">${$('file')}<span>types.ts</span></button>
            </div>
            <div class="ft-row"><span class="dir">${$('chevronRight')}</span><span>api</span></div>
            <div class="ft-row"><span class="dir">${$('chevronRight')}</span><span>ui</span></div>
          </div>
          <div class="ft-row"><span class="dir">${$('chevronRight')}</span><span>tests</span></div>
          <div class="ft-row">${$('file')}<span>README.md</span></div>
          <div class="ft-row">${$('file')}<span>package.json</span></div>
        </div>
        <div class="col grow" style="min-width:0">
          <div class="pane-head"><span class="pane-title mono t-12">src/session/archive.ts</span><div class="grow"></div><span class="chip chip-ok">已保存</span></div>
          <div class="code-view">
            ${[
              ['1', '<span class="tok-k">import</span> { db } <span class="tok-k">from</span> <span class="tok-s">"../db"</span>'],
              ['2', '<span class="tok-k">import</span> { NotFoundError } <span class="tok-k">from</span> <span class="tok-s">"../errors"</span>'],
              ['3', ''],
              ['4', '<span class="tok-k">export</span> <span class="tok-k">async</span> <span class="tok-k">function</span> archiveSession(id: <span class="tok-n">string</span>) {'],
              ['5', '  <span class="tok-k">const</span> row = <span class="tok-k">await</span> db.sessions.get(id)'],
              ['6', '  <span class="tok-k">if</span> (!row) <span class="tok-k">throw</span> <span class="tok-k">new</span> NotFoundError(id)'],
              ['7', ''],
              ['8', '  <span class="tok-k">return</span> db.sessions.update(id, { archivedAt: Date.now() })'],
              ['9', '}'],
              ['10', ''],
              ['11', '<span class="tok-k">export</span> <span class="tok-k">async</span> <span class="tok-k">function</span> restoreSession(id: <span class="tok-n">string</span>) {'],
              ['12', '  <span class="tok-k">return</span> db.sessions.update(id, { archivedAt: <span class="tok-n">null</span> })'],
              ['13', '}'],
            ].map(([n, t]) => `<div class="code-line"><span class="n">${n}</span><span class="t">${t}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `,
});

const sessionsPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '会话', sub: '流萤漫剧' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <div style="flex:1;height:30px;border-radius:8px;background:var(--fill);display:flex;align-items:center;gap:8px;padding:0 10px;color:var(--ink-3);font-size:12.5px">
            ${$('search')}<span>搜索会话名称</span>
          </div>
          <div class="seg">
            <button aria-pressed="true">全部</button>
            <button>进行中</button>
            <button>已归档</button>
          </div>
        </div>
        <div class="pane-body">
          <table class="table">
            <thead><tr><th>会话</th><th>工作区</th><th>状态</th><th>更新</th><th></th></tr></thead>
            <tbody>
              ${[
                ['给会话列表加归档', '流萤漫剧', '进行中', '2 分钟前', 'warn'],
                ['修复拖拽排序抖动', '流萤漫剧', '完成', '1 小时前', 'ok'],
                ['把设置页拆成两级', 'dsh 手机版 UI', '完成', '3 小时前', 'ok'],
                ['归档的快捷键', '流萤漫剧', '已归档', '昨天', ''],
                ['插件市场的搜索', '插件推广', '已归档', '3 天前', ''],
              ].map(([t, w, s, time, k]) => `
                <tr>
                  <td><b class="w-550">${t}</b></td>
                  <td class="sec">${w}</td>
                  <td><span class="chip ${k ? 'chip-' + k : ''}">${s}</span></td>
                  <td class="muted mono t-12">${time}</td>
                  <td style="text-align:right"><button class="btn btn-sm btn-ghost" aria-label="更多">${$('more')}</button></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    ${rail('变更')}
  `,
});

const searchPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '搜索' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <div style="flex:1;height:30px;border-radius:8px;background:var(--fill);display:flex;align-items:center;gap:8px;padding:0 10px;font-size:12.5px">
            ${$('search')}<span style="font-family:var(--mono)">归档</span><span class="caret"></span>
          </div>
          <span class="muted t-12">12 条结果 · 23ms</span>
        </div>
        <div class="pane-body p-16">
          ${[
            ['给会话列表加归档', '流萤漫剧 · 2 分钟前', '...把删除改成软归档，写 archivedAt，列表默认过滤...'],
            ['归档的快捷键', '流萤漫剧 · 昨天', '...Cmd Z 恢复，归档不弹确认...'],
            ['store.test.ts', '文件 · 142 行', '...describe("archive", () => {...'],
          ].map(([t, meta, snip]) => `
            <div class="card card-pad mb-8">
              <div class="row gap-8"><b class="t-13">${t}</b><div class="grow"></div><span class="t-11 muted mono">${meta}</span></div>
              <div class="t-12 sec mt-4 mono">${snip}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `,
});

const jobsPage = () => pcShell({
  side: sideBar({ active: 'automation' }),
  main: `
    ${topBar({ title: '后台任务' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head"><span class="pane-title">3 个任务</span><div class="grow"></div><div class="seg"><button aria-pressed="true">全部</button><button>运行中</button><button>失败</button></div></div>
        <div class="pane-body p-16">
          ${[
            ['全量测试', 'pnpm test', '运行中', 'warn', 64],
            ['构建 Web', 'pnpm build:web', '成功', 'ok', 100],
            ['类型检查', 'pnpm typecheck', '成功', 'ok', 100],
          ].map(([t, cmd, s, k, p]) => `
            <div class="card card-pad mb-12">
              <div class="row gap-10">
                <div class="col" style="gap:2px;flex:1">
                  <b class="t-13">${t}</b>
                  <span class="mono t-11 muted">${cmd}</span>
                </div>
                <span class="chip chip-${k}">${s}</span>
                <button class="btn btn-sm btn-ghost">日志</button>
              </div>
              <div class="bar mt-12"><i style="width:${p}%"></i></div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    ${rail('运行')}
  `,
});

const automationPage = () => pcShell({
  side: sideBar({ active: 'automation' }),
  main: `
    ${topBar({ title: '自动化任务' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <span class="pane-title">4 条自动化</span>
          <div class="grow"></div>
          <button class="btn btn-primary btn-sm">新建自动化</button>
        </div>
        <div class="pane-body p-16">
          ${[
            ['每天早上汇总会话', '每天 09:00 · 上次 2 小时前', '已启用', 'ok'],
            ['周五清理归档会话', '每周五 18:00 · 下次 3 天后', '已启用', 'ok'],
            ['依赖更新检查', '每周一 10:00 · 上次失败', '需要处理', 'bad'],
            ['提交前跑测试', '手动触发', '已停用', ''],
          ].map(([t, meta, s, k]) => `
            <div class="card card-pad mb-12">
              <div class="row gap-10">
                <span class="who-mark">${$('clock')}</span>
                <div class="col" style="gap:2px;flex:1">
                  <b class="t-13">${t}</b>
                  <span class="t-11 muted mono">${meta}</span>
                </div>
                <span class="chip ${k ? 'chip-' + k : ''}">${s}</span>
                <div class="switch" role="switch" aria-checked="${k !== ''}" aria-label="${t}"></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `,
});

const goalsPage = () => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '目标' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head"><span class="pane-title">本会话目标</span><div class="grow"></div><button class="btn btn-sm">暂停</button></div>
        <div class="pane-body">
          <div class="form">
            <h2>让会话可以归档、可恢复、可检索</h2>
            <p class="lead">不再用删除代替归档；归档后默认列表不出现，搜索仍能找到。</p>
            <div class="card card-pad mb-12">
              <div class="row gap-8 mb-8"><b class="t-13">进度</b><div class="grow"></div><span class="chip chip-ok">3 / 4</span></div>
              <div class="bar"><i style="width:75%"></i></div>
              <div class="mt-12 t-12 sec">
                <div>✓ 数据层 archive / restore</div>
                <div>✓ 列表默认过滤</div>
                <div>✓ 单测 29 通过</div>
                <div class="muted">○ e2e 快照更新</div>
              </div>
            </div>
            <div class="card card-pad">
              <div class="row gap-8"><span class="chip chip-warn">下一轮</span><span class="t-12 sec">继续完成 e2e 快照，然后提交 PR。</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ${rail('上下文')}
  `,
});

const pluginsPage = () => pcShell({
  side: sideBar({ active: 'plugins' }),
  main: `
    ${topBar({ title: '插件' })}
    <div class="content">
      <div class="pane">
        <div class="pane-head">
          <span class="pane-title">已安装</span>
          <div class="grow"></div>
          <div style="width:200px;height:30px;border-radius:8px;background:var(--fill);display:flex;align-items:center;gap:8px;padding:0 10px;color:var(--ink-3);font-size:12.5px">${$('search')}<span>搜索插件</span></div>
          <button class="btn btn-sm btn-primary">安装</button>
        </div>
        <div class="pane-body p-16">
          ${[
            ['燧火漫助', '漫剧制作工作台，生成前自动反问审查', true, '内置'],
            ['语音输入', '本地 SenseVoice，离线可用', true, '实验'],
            ['代理团队', '多代理协作与任务分派', false, '实验'],
            ['插件市场', '从市场发现并安装插件', false, ''],
            ['会话检查器', '查看原始会话日志与节点', false, ''],
          ].map(([t, d, on, tag]) => `
            <div class="card card-pad mb-12">
              <div class="row gap-12">
                <span class="brand-mark" style="border-radius:10px">${$('puzzle')}</span>
                <div class="col" style="gap:2px;flex:1">
                  <div class="row gap-8"><b class="t-13">${t}</b>${tag ? `<span class="chip">${tag}</span>` : ''}</div>
                  <span class="t-12 muted">${d}</span>
                </div>
                <button class="btn btn-sm btn-ghost">配置</button>
                <div class="switch" role="switch" aria-checked="${on}" aria-label="${t}"></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </div>
  `,
});

const palettePage = () => `
  <div class="device device-pc" style="position:relative">
    ${sideBar()}
    <div class="main" style="flex:1;min-width:0">${topBar()}
      <div class="content">
        <div class="thread"><div class="thread-inner">
          ${userTurn('把测试也跑一遍')}
          ${aiTurn(`<div class="prose"><p>好，先跑单测再跑 e2e。</p></div>`)}
        </div></div>
      </div>
      ${composer({})}
    </div>
    <div style="position:absolute;inset:0;background:rgba(28,26,23,.20)"></div>
    <div style="position:absolute;left:50%;top:120px;transform:translateX(-50%);width:560px;background:var(--panel);border-radius:var(--r-lg);box-shadow:var(--shadow-pop);overflow:hidden">
      <div class="row gap-10 p-16" style="border-bottom:1px solid var(--line-2)">
        ${$('search')}<span style="font-size:15px">切换模型</span><span class="caret"></span>
        <div class="grow"></div><span class="chip">Cmd K</span>
      </div>
      <div style="padding:8px">
        <div class="pop-label">操作</div>
        ${[
          ['切换到 DeepSeek-V4.1', '当前', true],
          ['打开设置 · 模型', '⌘,', false],
          ['新建会话', '⌘N', false],
          ['压缩上下文', '/compact', false],
        ].map(([t, meta, cur]) => `
          <button class="pop-item" ${cur ? 'style="background:var(--fill)"' : ''}>
            ${cur ? $('check') : '<span style="width:16px"></span>'}
            <span class="grow">${t}</span><span class="meta">${meta}</span>
          </button>`).join('')}
      </div>
    </div>
  </div>`;

/* ---------------------------------------------------------------- settings */

const setShell = (active, body) => pcShell({
  side: sideBar(),
  main: `
    ${topBar({ title: '设置', actions: false })}
    <div class="content set-shell">
      <nav class="set-nav">
        ${[
          ['常规', 'general'], ['模型', 'models'], ['权限', 'permissions'], ['预设', 'presets'],
          ['外观', 'appearance'], ['快捷键', 'shortcuts'], ['账户', 'account'], ['插件', 'plugins'],
        ].map(([t, id]) => `<button class="set-nav-item" ${t === active ? 'aria-current="true"' : ''}>${t}</button>`).join('')}
      </nav>
      <div class="set-body">${body}</div>
    </div>
  `,
});

const setGeneral = () => setShell('常规', `
  <div class="form">
    <h2>常规</h2>
    <p class="lead">影响所有会话的默认行为。</p>
    <div class="field">
      <div class="field-label"><b>权限模式</b><span>新会话默认使用哪一种写入权限</span></div>
      <div class="field-control">
        <button class="select"><span class="grow">Workspace Write</span>${$('chevronDown')}</button>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>语言</b><span>界面与回复的语言</span></div>
      <div class="field-control"><button class="select"><span class="grow">简体中文</span>${$('chevronDown')}</button></div>
    </div>
    <div class="field">
      <div class="field-label"><b>外观</b><span>跟随系统或固定一种</span></div>
      <div class="field-control">
        <div class="row gap-8">
          <button class="btn">浅色</button><button class="btn">深色</button><button class="btn" style="background:var(--fill-2)">跟随系统</button>
        </div>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>字号</b><span>只影响会话正文</span></div>
      <div class="field-control">
        <div class="row gap-8"><button class="select" style="padding:0 14px;justify-content:center">14 px</button><span class="muted t-12">正文行高 1.7</span></div>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>工作详情</b><span>工具调用的展开程度</span></div>
      <div class="field-control"><button class="select"><span class="grow">详细</span>${$('chevronDown')}</button></div>
    </div>
    <div class="field">
      <div class="field-label"><b>显示编码视图</b><span>显示轨迹、代码差异与预设</span></div>
      <div class="field-control"><div class="switch" role="switch" aria-checked="true"></div></div>
    </div>
    <div class="field">
      <div class="field-label"><b>全局指令</b><span>适用于所有会话的偏好与约定</span></div>
      <div class="field-control" style="align-self:stretch">
        <textarea class="textarea" style="min-height:120px" placeholder="在这里写下所有会话都应遵守的指令…"></textarea>
        <div class="form-actions" style="width:100%"><button class="btn">取消</button><button class="btn btn-primary">保存</button></div>
      </div>
    </div>
  </div>`);

const setModels = () => setShell('模型', `
  <div class="form">
    <h2>模型</h2>
    <p class="lead">选择默认模型，并为不同任务指定模型。</p>
    <div class="field">
      <div class="field-label"><b>默认模型</b><span>新会话使用</span></div>
      <div class="field-control"><button class="select" style="min-width:220px"><span class="grow">DeepSeek-V4.1 · 1017</span>${$('chevronDown')}</button></div>
    </div>
    <div class="field">
      <div class="field-label"><b>思考强度</b><span>越强越慢</span></div>
      <div class="field-control">
        <div class="seg"><button>低</button><button aria-pressed="true">中</button><button>高</button></div>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>子代理模型</b><span>分派给子代理时使用</span></div>
      <div class="field-control"><button class="select" style="min-width:220px"><span class="grow">继承主会话</span>${$('chevronDown')}</button></div>
    </div>
    <div class="card card-pad mt-16">
      <div class="row gap-8"><span class="chip chip-ok">已连接</span><b class="t-13">DeepSeek 官方 API</b><div class="grow"></div><button class="btn btn-sm">测试连接</button></div>
      <div class="mono t-11 muted mt-8">key · sk-••••••••••••3f9a · 余额 42.10 元</div>
    </div>
  </div>`);

const setPermissions = () => setShell('权限', `
  <div class="form">
    <h2>权限</h2>
    <p class="lead">决定我能在没有确认的情况下做什么。</p>
    ${[
      ['只读', '只能读取文件；任何写入都要确认', false],
      ['工作区写入', '可以改工作区内的文件，越界要确认', true],
      ['完全访问', '可以运行任意命令与网络访问', false],
    ].map(([t, d, cur]) => `
      <div class="card card-pad mb-12" style="${cur ? 'box-shadow:0 0 0 1.5px var(--primary)' : ''}">
        <div class="row gap-10">
          <div class="col" style="gap:3px;flex:1"><b class="t-13">${t}</b><span class="t-12 muted">${d}</span></div>
          ${cur ? `<span class="chip chip-ok">当前</span>` : ''}
        </div>
      </div>`).join('')}
    <div class="field mt-16">
      <div class="field-label"><b>自动审查</b><span>用模型先判断危险命令，再决定是否弹确认</span></div>
      <div class="field-control"><div class="switch" role="switch" aria-checked="true"></div></div>
    </div>
  </div>`);

const setPresets = () => setShell('预设', `
  <div class="form">
    <h2>预设</h2>
    <p class="lead">预设定制我的工具、提示与权限组合。</p>
    <div class="row gap-8 mb-16">
      ${['标准', '计划优先', '只读审阅', '最小'].map((t, i) => `<button class="btn" style="${i === 0 ? 'background:var(--fill-2);font-weight:550' : ''}">${t}</button>`).join('')}
      <div class="grow"></div>
      <button class="btn btn-sm">新建预设</button>
    </div>
    <div class="card card-pad mb-12">
      <div class="row gap-8 mb-8"><b class="t-13">标准</b><span class="chip chip-ok">默认</span><div class="grow"></div><button class="btn btn-sm btn-ghost">编辑</button></div>
      <div class="t-12 sec">工具：bash · fs · web · skill · jobs · subagent<br>权限：工作区写入 · 自动审查开<br>模型：继承主会话</div>
    </div>
    <div class="card card-pad" style="background:var(--panel-2)">
      <div class="row gap-8"><span class="chip">当前会话</span><span class="t-12 sec">标准模式</span><div class="grow"></div><button class="btn btn-sm">切换</button></div>
    </div>
  </div>`);

const setAppearance = () => setShell('外观', `
  <div class="form">
    <h2>外观</h2>
    <p class="lead">只影响这个界面的显示。</p>
    <div class="field">
      <div class="field-label"><b>主题</b><span>浅色、深色或跟随系统</span></div>
      <div class="field-control">
        <div class="row gap-10">
          ${[['浅色', false], ['深色', false], ['跟随系统', true]].map(([t, cur]) => `
            <div class="card" style="width:132px;padding:10px;text-align:center;${cur ? 'box-shadow:0 0 0 1.5px var(--primary)' : ''}">
              <div style="height:56px;border-radius:8px;background:${t === '深色' ? '#1b1a17' : 'var(--fill)'};margin-bottom:8px"></div>
              <span class="t-12 ${cur ? 'w-550' : 'sec'}">${t}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>界面密度</b><span>列表与表格的松紧</span></div>
      <div class="field-control"><div class="seg"><button>紧凑</button><button aria-pressed="true">标准</button><button>宽松</button></div></div>
    </div>
    <div class="field">
      <div class="field-label"><b>强调色</b><span>只用于焦点与选中</span></div>
      <div class="field-control"><div class="row gap-8">
        ${['#1c1a17', '#3b5bdb', '#2e7d57', '#96631a', '#b1413a'].map((c, i) => `<span style="width:26px;height:26px;border-radius:50%;background:${c};box-shadow:${i === 0 ? '0 0 0 2px var(--panel),0 0 0 4px var(--ink)' : 'none'}"></span>`).join('')}
      </div></div>
    </div>
  </div>`);

const setShortcuts = () => setShell('快捷键', `
  <div class="form">
    <h2>快捷键</h2>
    <p class="lead">按 Cmd 查看全部动作；这里只列出最常用的。</p>
    <table class="table">
      <thead><tr><th>动作</th><th>快捷键</th><th></th></tr></thead>
      <tbody>
        ${[
          ['发送消息', 'Enter'], ['换行', 'Shift Enter'], ['命令面板', 'Cmd K'], ['新建会话', 'Cmd N'],
          ['搜索会话', 'Cmd F'], ['切换模型', 'Cmd Shift M'], ['压缩上下文', 'Cmd Shift C'], ['停止生成', 'Esc'],
        ].map(([a, k]) => `<tr><td>${a}</td><td class="mono t-12">${k.split(' ').map((x) => `<kbd>${x}</kbd>`).join(' ')}</td><td style="text-align:right"><button class="btn btn-sm btn-ghost">修改</button></td></tr>`).join('')}
      </tbody>
    </table>
  </div>`);

const setAccount = () => setShell('账户', `
  <div class="form">
    <h2>账户</h2>
    <p class="lead">本机运行，密钥只保存在这台机器上。</p>
    <div class="card card-pad mb-16">
      <div class="row gap-12">
        <span class="avatar" style="width:36px;height:36px;font-size:14px">李</span>
        <div class="col" style="gap:2px"><b class="t-13">leef</b><span class="t-12 muted">Pro 订阅 · 已登录</span></div>
        <div class="grow"></div>
        <button class="btn btn-sm">退出登录</button>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>API 密钥</b><span>DeepSeek 官方</span></div>
      <div class="field-control"><div class="mono t-12" style="background:var(--fill);padding:8px 11px;border-radius:8px">sk-••••••••••••3f9a</div></div>
    </div>
    <div class="field">
      <div class="field-label"><b>用量</b><span>本月</span></div>
      <div class="field-control" style="align-self:stretch">
        <div class="kv"><span class="k">已用</span><span class="v">12.4 元 / 100 元</span></div>
        <div class="bar"><i style="width:12%"></i></div>
      </div>
    </div>
    <div class="field">
      <div class="field-label"><b>遥测</b><span>发送匿名使用统计</span></div>
      <div class="field-control"><div class="switch" role="switch" aria-checked="false"></div></div>
    </div>
  </div>`);

/* ------------------------------------------------------------------ mobile */

/* One shell for every phone page. The earlier set drew its own bar, padding and
 * row rhythm per page, which is why the mobile half read as unrelated screens;
 * everything below composes these five pieces instead. */
const mStatusBar = () => `
  <div class="m-status"><span>9:41</span><span class="r">${$('bell')}<span style="font-family:var(--mono)">100%</span></span></div>`;

const mShell = ({ title, back = true, right = 'more', body, footer = '', float = '', overlay = '' }) => `
  <div class="device device-phone">
    ${mStatusBar()}
    <div class="m-bar">
      ${back ? `<button class="m-bar-btn" aria-label="返回">${$('chevronLeft')}</button>` : '<span></span>'}
      <div class="m-bar-title">${title}</div>
      ${right === 'more' ? `<button class="m-bar-btn" aria-label="更多">${$('more')}</button>` : right === 'none' ? '<span></span>' : `<button class="m-bar-btn" aria-label="${right}">${$(right)}</button>`}
    </div>
    <div class="m-body">${body}</div>
    ${footer}
    ${float}
    ${overlay}
  </div>`;

const mRow = ({ title, sub = '', meta = '', right = 'chevron', chip = '', icon = '', current = false }) => `
  <button class="m-row" ${current ? 'aria-current="true" style="background:var(--panel-2)"' : ''}>
    ${icon ? `<span class="avatar" style="border-radius:9px">${$(icon)}</span>` : ''}
    <span class="m-row-main">
      <span class="m-row-title">${title}</span>
      ${sub ? `<span class="m-row-sub">${sub}</span>` : ''}
    </span>
    ${chip ? `<span class="chip">${chip}</span>` : ''}
    ${meta ? `<span class="m-row-meta">${meta}</span>` : ''}
    ${right === 'chevron' ? $('chevronRight') : right === 'check' ? `<span class="pop-check">${$('check')}</span>` : right === 'none' ? '' : right}
  </button>`;

const mGroup = (label, rows) => `<div class="m-group-label">${label}</div>${rows}`;

const mComposer = ({ ph = '描述你想构建的内容，/ 命令，@ 引用', text = '', busy = false, menu = '' }) => `
  <div class="m-composer" style="position:relative">
    ${menu}
    <div class="m-card">
      <div class="m-input">${text ? `${text}<span class="caret"></span>` : `<span class="ph muted">${ph}</span>`}</div>
      <div class="m-row-ctl">
        <button class="m-pill">${$('plus')}</button>
        <button class="m-pill">${$('target')}<span>写入</span></button>
        <div class="grow"></div>
        <button class="m-pill">${$('mic')}</button>
        <button class="send ${busy ? 'send-stop' : ''}">${$(busy ? 'stop' : 'send')}</button>
      </div>
    </div>
  </div>`;

const mSheet = ({ title, items, scrim = true }) => `
  ${scrim ? '<div class="m-scrim"></div>' : ''}
  <div class="m-sheet">
    <div class="m-grabber"></div>
    ${title ? `<div class="m-sheet-title">${title}</div>` : ''}
    ${items.map(([icon, label, meta]) => `
      <button class="pop-item" style="height:48px;padding:0 18px">
        ${icon ? $(icon) : ''}<span class="grow">${label}</span>${meta ? `<span class="meta">${meta}</span>` : ''}
      </button>`).join('')}
  </div>`;

/* --- home ---------------------------------------------------------------- */

const mSessions = () => mShell({
  title: '会话',
  back: false,
  float: `<button class="m-fab">${$('plus')}<span>新建</span></button>`,
  body: `
    <div class="m-pad">
      <div style="height:38px;border-radius:10px;background:var(--fill);display:flex;align-items:center;gap:8px;padding:0 12px;color:var(--ink-3);font-size:14px">${$('search')}<span>搜索会话</span></div>
      <div class="row gap-8 mt-12">
        ${['全部', '进行中', '已归档'].map((t, i) => `<button class="btn btn-sm" style="${i === 0 ? 'background:var(--fill-2);font-weight:550' : ''}">${t}</button>`).join('')}
      </div>
    </div>
    ${mGroup('流萤漫剧', `
      ${mRow({ title: '给会话列表加归档', sub: '2 分钟前 · 进行中', chip: '进行中', current: true })}
      ${mRow({ title: '修复拖拽排序抖动', sub: '1 小时前 · 完成' })}
      ${mRow({ title: '把设置页拆成两级', sub: '3 小时前 · 完成' })}
    `)}
    ${mGroup('插件推广', `
      ${mRow({ title: '插件市场的搜索', sub: '昨天 · 已归档' })}
      ${mRow({ title: '卡片密度调整', sub: '3 天前 · 已归档' })}
    `)}
    ${mGroup('语音操作', mRow({ title: '语音草稿的断句', sub: '上周 · 完成' }))}
    <div style="height:80px"></div>`,
});

const mEmpty = () => mShell({
  title: '新会话',
  right: 'none',
  body: `
    <div class="empty" style="padding-top:60px">
      <div style="width:52px;height:52px;border-radius:16px;background:var(--primary);color:var(--on-primary);display:grid;place-items:center;font:600 20px/1 var(--serif);margin-bottom:16px">DS</div>
      <h3>从一句话开始</h3>
      <p>描述你想构建的东西。我会先读项目，再动手；写文件、跑命令之前都会先问你。</p>
      <div class="row gap-8" style="flex-wrap:wrap;justify-content:center">
        ${['给会话加归档', '把设置拆两级', '修一下拖拽抖动'].map((t) => `<button class="btn btn-sm">${t}</button>`).join('')}
      </div>
    </div>`,
  footer: mComposer({}),
});

const mSearch = () => mShell({
  title: '搜索',
  right: 'none',
  body: `
    <div class="m-pad">
      <div style="height:38px;border-radius:10px;background:var(--fill);display:flex;align-items:center;gap:8px;padding:0 12px;font-size:14px">${$('search')}<span class="mono">归档</span><span class="caret"></span></div>
      <div class="t-11 muted mt-8">12 条结果 · 23ms</div>
    </div>
    ${mRow({ title: '给会话列表加归档', sub: '流萤漫剧 · 2 分钟前' })}
    ${mRow({ title: '归档的快捷键', sub: '流萤漫剧 · 昨天' })}
    ${mRow({ title: 'store.test.ts', sub: '文件 · 142 行', icon: 'file' })}`,
});

/* --- conversation -------------------------------------------------------- */

const mConv = () => mShell({
  title: '给会话列表加归档',
  body: `
    <div class="m-pad">
      <div class="turn-user mb-16"><div class="bubble-user" style="background:var(--fill);border-radius:16px">会话列表没法归档，删了就找不回来了。加一个归档，别直接删。</div></div>
      <div class="who"><span class="who-mark">D</span><span>DeepSeek</span></div>
      <div class="prose t-13"><p>改成软归档：写 <code>archivedAt</code>，列表默认过滤，可恢复。先看删除路径。</p></div>
      <div class="tool-card mt-8">
        <div class="tool-head">${$('terminal')}<span class="t">grep</span><div class="grow"></div><span class="chip chip-ok">完成</span></div>
        <div class="tool-body"><div class="ln">store.ts:128  delete(id)</div><div class="ln">session.ts:74  remove(id)</div></div>
      </div>
      <div class="tool-card mt-8">
        <div class="tool-head">${$('branch')}<span class="t">编辑 · archive.ts</span><div class="grow"></div><span class="chip chip-ok">+38</span></div>
        <div class="diff" style="font-size:11px">
          <div class="diff-row diff-add"><span class="diff-gutter">42</span><span class="diff-code">+export async function</span></div>
          <div class="diff-row diff-add"><span class="diff-gutter">43</span><span class="diff-code">+  archiveSession(id) {</span></div>
        </div>
      </div>
      <div class="prose t-13 mt-12"><p>改完了，29 个测试通过。</p></div>
    </div>`,
  footer: mComposer({}),
});

const mConvPlus = () => mShell({
  title: '给会话列表加归档',
  body: `
    <div class="m-pad">
      <div class="turn-user"><div class="bubble-user" style="background:var(--fill);border-radius:16px">会话列表没法归档，删了就找不回来了。</div></div>
    </div>`,
  footer: mComposer({}),
  overlay: mSheet({ title: '添加', items: [['file', '文件与文件夹', '@'], ['sparkle', '技能', ''], ['puzzle', '插件', ''], ['globe', '浏览器连接', ''], ['terminal', '运行命令', '/']] }),
});

const mConvAt = () => mShell({
  title: '给会话列表加归档',
  body: `<div class="m-pad"><div class="turn-user"><div class="bubble-user" style="background:var(--fill);border-radius:16px">引用一下那个文件</div></div></div>`,
  footer: mComposer({}),
  overlay: mSheet({ title: '引用文件 · 流萤漫剧', items: [['file', 'src/session/archive.ts', '刚编辑'], ['file', 'src/session/store.ts', ''], ['file', 'tests/session/store.test.ts', ''], ['layers', '修复拖拽排序抖动', '1h']] }),
});

const mConvSlash = () => mShell({
  title: '给会话列表加归档',
  body: `<div class="m-pad"><div class="turn-user"><div class="bubble-user" style="background:var(--fill);border-radius:16px">/</div></div></div>`,
  footer: mComposer({}),
  overlay: mSheet({ title: '命令', items: [['target', '/plan', '计划模式'], ['layers', '/compact', '压缩上下文'], ['gear', '/model', '切换模型'], ['user', '/permission', '权限模式']] }),
});

const mApproval = () => mShell({
  title: '需要授权',
  body: `
    <div style="padding:14px">
      <div class="m-card-big">
        <div class="p-14">
          <div class="row gap-8 mb-8"><span class="chip chip-warn">等待授权</span><span class="t-11 muted mono">bash</span></div>
          <div class="mono t-12" style="background:var(--fill);padding:10px;border-radius:10px;line-height:1.6">pnpm test -- --e2e<br>--update-snapshots</div>
          <div class="t-12 sec mt-12">将写入 <span class="mono">tests/e2e/__snapshots__/</span> 下 6 个文件。工作区内，不访问网络。</div>
        </div>
        <div class="m-approve-actions">
          <button class="btn btn-primary">允许一次</button>
          <button class="btn">本会话都允许</button>
        </div>
      </div>
      <div class="card card-pad" style="background:var(--panel-2)">
        <div class="t-12 sec">拒绝后我会改用只读方式重跑，不会写入任何文件。</div>
      </div>
    </div>`,
});

const mAsk = () => mShell({
  title: '需要你选择',
  body: `
    <div style="padding:14px">
      <div class="t-13 sec mb-12">归档的会话还要出现在搜索里吗？</div>
      <div class="m-card-big">
        <button class="pop-item" style="height:auto;padding:14px 16px;align-items:flex-start;background:var(--panel-2)">
          <span class="col" style="align-items:flex-start;gap:3px">
            <span style="font-weight:550">仍然出现，带「已归档」标签</span>
            <span class="t-12 muted">历史仍可被检索到</span>
          </span>
          <span class="pop-check">${$('check')}</span>
        </button>
        <div class="m-sep"></div>
        <button class="pop-item" style="height:auto;padding:14px 16px;align-items:flex-start">
          <span class="col" style="align-items:flex-start;gap:3px">
            <span style="font-weight:550">完全不出现在搜索里</span>
            <span class="t-12 muted">需要「显示归档」开关才能找回</span>
          </span>
        </button>
      </div>
      <button class="btn btn-primary" style="width:100%;height:44px;border-radius:999px;margin-top:14px">就这样</button>
    </div>`,
});

const mPlan = () => mShell({
  title: '计划 · 归档与恢复',
  body: `
    <div style="padding:14px">
      ${[
        ['1', '数据层', 'archive / restore 写 archivedAt，不删行', 'ok', '+38 −4'],
        ['2', '查询过滤', 'list 与 search 默认加 archivedAt == null', 'ok', '+12 −3'],
        ['3', '界面', '行内动作换成「归档」，加一次性撤销', 'warn', '待确认'],
        ['4', '验证', '单测覆盖归档/恢复/幂等，e2e 覆盖列表与搜索', '', ''],
      ].map(([n, t, d, k, diff]) => `
        <div class="card card-pad mb-12">
          <div class="row gap-8 mb-8"><span class="chip">${n}</span><b class="t-13">${t}</b><div class="grow"></div>${diff ? `<span class="chip ${k === 'ok' ? 'chip-ok' : 'chip-warn'}">${diff}</span>` : ''}</div>
          <div class="t-12 sec">${d}</div>
        </div>`).join('')}
    </div>`,
  footer: `<div class="m-composer" style="display:flex;gap:8px">
    <button class="btn" style="flex:1;height:44px;border-radius:999px">调整</button>
    <button class="btn btn-primary" style="flex:1;height:44px;border-radius:999px">开始实现</button>
  </div>`,
});

const mDiff = () => mShell({
  title: '变更 · 3 个文件',
  body: `
    <div class="m-pad"><div class="row gap-8"><span class="chip chip-ok">+64</span><span class="chip chip-bad">−11</span><div class="grow"></div><span class="t-11 muted mono">29 通过</span></div></div>
    <div class="diff-file">${$('file')}<span>archive.ts</span><span class="chip chip-ok">新增</span></div>
    <div class="diff" style="font-size:11px">
      ${[['4', '+export async function archiveSession(id)', 'diff-add'], ['5', '+  const row = await db.sessions.get(id)', 'diff-add'], ['6', '+  if (!row) throw new NotFoundError(id)', 'diff-add'], ['7', ' ', ''], ['8', '+  return db.sessions.update(id, {', 'diff-add'], ['9', '+    archivedAt: Date.now() })', 'diff-add'], ['10', '+}', 'diff-add']]
        .map(([n, t, c]) => `<div class="diff-row ${c}"><span class="diff-gutter">${n}</span><span class="diff-code">${escapeHtml(t)}</span></div>`).join('')}
    </div>
    <div class="diff-file">${$('file')}<span>store.ts</span><span class="chip">修改</span></div>
    <div class="diff" style="font-size:11px">
      <div class="diff-row diff-del"><span class="diff-gutter">127</span><span class="diff-code">-  await db.sessions.delete(id)</span></div>
      <div class="diff-row diff-add"><span class="diff-gutter">127</span><span class="diff-code">+  await archiveSession(id)</span></div>
    </div>`,
});

const mFiles = () => mShell({
  title: '文件',
  right: 'search',
  body: `
    ${mGroup('src/session', `
      ${mRow({ title: 'archive.ts', icon: 'file', current: true, meta: '改' })}
      ${mRow({ title: 'store.ts', icon: 'file', meta: '改' })}
      ${mRow({ title: 'types.ts', icon: 'file' })}
    `)}
    ${mGroup('根目录', `
      ${mRow({ title: 'README.md', icon: 'file' })}
      ${mRow({ title: 'package.json', icon: 'file' })}
    `)}`,
});

const mCode = () => mShell({
  title: 'archive.ts',
  body: `
    <div class="code-view" style="padding:10px 0">
      ${[
        ['1', '<span class="tok-k">import</span> { db } <span class="tok-k">from</span> <span class="tok-s">"../db"</span>'],
        ['2', '<span class="tok-k">import</span> { NotFoundError } <span class="tok-k">from</span> <span class="tok-s">"../errors"</span>'],
        ['3', ''],
        ['4', '<span class="tok-k">export</span> <span class="tok-k">async</span> <span class="tok-k">function</span> archiveSession(id: <span class="tok-n">string</span>) {'],
        ['5', '  <span class="tok-k">const</span> row = <span class="tok-k">await</span> db.sessions.get(id)'],
        ['6', '  <span class="tok-k">if</span> (!row) <span class="tok-k">throw</span> <span class="tok-k">new</span> NotFoundError(id)'],
        ['7', ''],
        ['8', '  <span class="tok-k">return</span> db.sessions.update(id, { archivedAt: Date.now() })'],
        ['9', '}'],
      ].map(([n, t]) => `<div class="code-line"><span class="n">${n}</span><span class="t">${t}</span></div>`).join('')}
    </div>`,
  footer: `<div class="m-composer" style="display:flex;gap:8px"><button class="btn" style="flex:1;height:40px;border-radius:999px">查看差异</button><button class="btn btn-primary" style="flex:1;height:40px;border-radius:999px">在会话里讨论</button></div>`,
});

const mTerminal = () => mShell({
  title: 'bash',
  right: 'play',
  body: `<div class="term" style="height:100%">
    <div><span class="p">~/流萤漫剧 $</span> <span class="c">pnpm test src/session</span></div>
    <div class="o">&nbsp;</div>
    <div class="o"> ✓ store.test.ts (14)</div>
    <div class="o"> ✓ archive.test.ts (9)</div>
    <div class="o"> ✓ api/session.test.ts (6)</div>
    <div class="o">&nbsp;</div>
    <div class="o"> Tests  <span style="color:#8fd6a8">29 passed</span> (29)</div>
    <div class="o"> Duration 1.82s</div>
    <div><span class="p">~/流萤漫剧 $</span> <span class="caret" style="background:#e8e4da"></span></div>
  </div>`,
});

const mBrowser = () => mShell({
  title: '预览',
  right: 'globe',
  body: `
    <div style="padding:10px 12px"><div style="height:32px;border-radius:9px;background:var(--fill);display:flex;align-items:center;padding:0 10px;font-family:var(--mono);font-size:11.5px;color:var(--ink-2)">localhost:5173/sessions</div></div>
    <div class="p-14" style="background:var(--panel-2)">
      <div class="card" style="overflow:hidden">
        <div class="row gap-8 p-14" style="border-bottom:1px solid var(--line-2)"><b class="t-13">会话</b><div class="grow"></div><span class="chip">已归档</span></div>
        ${['给会话列表加归档', '修复拖拽排序抖动', '把设置页拆成两级'].map((t) => `<div class="row" style="padding:12px 14px;border-bottom:1px solid var(--line-2)"><b class="t-13">${t}</b></div>`).join('')}
      </div>
    </div>`,
});

const mRun = () => mShell({
  title: '运行轨迹',
  body: `
    <div class="m-pad">
      <div class="row gap-8 mb-12"><span class="chip chip-ok">已完成</span><span class="t-11 muted mono">12.4s · 8 步</span></div>
      ${[['读取上下文', 'grep · 2 处匹配'], ['阅读文件', '3 个文件 · 214 行'], ['写实现', 'archive.ts +38 −4'], ['跑测试', '29 passed · 1.82s'], ['自检', '类型检查通过']]
        .map(([t, d], i) => `<div class="row gap-12" style="padding:10px 0;border-bottom:1px solid var(--line-2)"><span class="chip">${i + 1}</span><div class="col" style="gap:2px"><b class="t-13">${t}</b><span class="t-11 muted mono">${d}</span></div><div class="grow"></div><span class="chip chip-ok">完成</span></div>`).join('')}
    </div>`,
});

const mAgents = () => mShell({
  title: '子代理',
  right: 'plus',
  body: `
    <div class="m-pad">
      ${[['测试补全', '补齐 archive 边界用例', '运行中', 'warn'], ['文档核对', '检查 README 语义', '已完成', 'ok'], ['依赖审计', '确认无新增依赖', '已完成', 'ok']]
        .map(([t, d, s, k]) => `<div class="card card-pad mb-12"><div class="row gap-10"><span class="who-mark">A</span><div class="col" style="gap:2px;flex:1"><b class="t-13">${t}</b><span class="t-12 muted">${d}</span></div><span class="chip chip-${k}">${s}</span></div></div>`).join('')}
    </div>`,
});

/* --- manage -------------------------------------------------------------- */

const mJobs = () => mShell({
  title: '后台任务',
  body: `
    <div class="m-pad">
      ${[['全量测试', 'pnpm test', '运行中', 'warn', 64], ['构建 Web', 'pnpm build:web', '成功', 'ok', 100], ['类型检查', 'pnpm typecheck', '成功', 'ok', 100]]
        .map(([t, cmd, s, k, p]) => `<div class="card card-pad mb-12"><div class="row gap-10"><div class="col" style="gap:2px;flex:1"><b class="t-13">${t}</b><span class="mono t-11 muted">${cmd}</span></div><span class="chip chip-${k}">${s}</span></div><div class="bar mt-12"><i style="width:${p}%"></i></div></div>`).join('')}
    </div>`,
});

const mAutomation = () => mShell({
  title: '自动化',
  right: 'plus',
  body: `
    <div class="m-pad">
      ${[['每天早上汇总会话', '每天 09:00 · 2 小时前', true], ['周五清理归档会话', '每周五 18:00', true], ['依赖更新检查', '每周一 10:00 · 失败', true], ['提交前跑测试', '手动触发', false]]
        .map(([t, meta, on]) => `<div class="card card-pad mb-12"><div class="row gap-10"><div class="col" style="gap:2px;flex:1"><b class="t-13">${t}</b><span class="t-11 muted mono">${meta}</span></div><div class="switch" role="switch" aria-checked="${on}"></div></div></div>`).join('')}
    </div>`,
});

const mPlugins = () => mShell({
  title: '插件',
  right: 'plus',
  body: `
    <div class="m-pad">
      ${[['燧火漫助', '漫剧制作工作台', true], ['语音输入', '本地 SenseVoice', true], ['代理团队', '多代理协作', false], ['插件市场', '发现并安装', false]]
        .map(([t, d, on]) => `<div class="card card-pad mb-12"><div class="row gap-12"><span class="avatar" style="border-radius:10px">${$('puzzle')}</span><div class="col" style="gap:2px;flex:1"><b class="t-13">${t}</b><span class="t-12 muted">${d}</span></div><div class="switch" role="switch" aria-checked="${on}"></div></div></div>`).join('')}
    </div>`,
});

/* --- settings ------------------------------------------------------------ */

const mNew = () => mShell({
  title: '新任务',
  body: `
    ${mGroup('在哪里运行', `
      ${mRow({ title: '本机 · 流萤漫剧', sub: '在这个工作区执行，可写文件', right: 'check' })}
      ${mRow({ title: '本机 · 插件推广', sub: '另一个工作区' })}
      ${mRow({ title: '云端沙箱', sub: '没有本机文件，需要上传' })}
    `)}
    ${mGroup('权限', `
      ${mRow({ title: '只读' })}
      ${mRow({ title: '工作区写入', right: 'check' })}
      ${mRow({ title: '完全访问' })}
    `)}
    ${mGroup('模型', mRow({ title: 'DeepSeek-V4.1 · 1017', sub: '思考强度：中', right: 'check' }))}`,
  footer: `<div class="m-composer"><button class="btn btn-primary" style="width:100%;height:44px;border-radius:999px">开始任务</button></div>`,
});

const mSettings = () => mShell({
  title: '设置',
  body: `
    ${mGroup('常用', `
      ${mRow({ title: '常规', sub: '权限、语言、外观' })}
      ${mRow({ title: '模型', sub: '默认模型与思考强度' })}
      ${mRow({ title: '权限', sub: '当前：工作区写入' })}
      ${mRow({ title: '预设', sub: '标准模式' })}
    `)}
    ${mGroup('其他', `
      ${mRow({ title: '快捷键' })}
      ${mRow({ title: '账户', sub: 'Pro · 已登录' })}
      ${mRow({ title: '插件', sub: '5 个已安装' })}
      ${mRow({ title: '关于', sub: '0.2.1-rc.2' })}
    `)}`,
});

const mSettingsDetail = () => mShell({
  title: '常规',
  body: `
    <div class="m-pad">
      <div class="field" style="flex-direction:column;gap:8px;align-items:stretch">
        <div class="field-label" style="width:auto"><b>权限模式</b><span>新会话默认的写入权限</span></div>
        <button class="select" style="width:100%"><span class="grow">Workspace Write</span>${$('chevronDown')}</button>
      </div>
      <div class="field" style="flex-direction:column;gap:8px;align-items:stretch">
        <div class="field-label" style="width:auto"><b>语言</b><span>界面与回复</span></div>
        <button class="select" style="width:100%"><span class="grow">简体中文</span>${$('chevronDown')}</button>
      </div>
      <div class="field" style="flex-direction:column;gap:8px;align-items:stretch">
        <div class="field-label" style="width:auto"><b>外观</b><span>跟随系统或固定一种</span></div>
        <div class="row gap-8"><button class="btn" style="flex:1">浅色</button><button class="btn" style="flex:1">深色</button><button class="btn" style="flex:1;background:var(--fill-2)">系统</button></div>
      </div>
      <div class="field" style="align-items:center;justify-content:space-between">
        <div class="field-label" style="width:auto"><b>显示编码视图</b><span>轨迹、差异与预设</span></div>
        <div class="switch" role="switch" aria-checked="true"></div>
      </div>
      <div class="field" style="align-items:center;justify-content:space-between;border-bottom:0">
        <div class="field-label" style="width:auto"><b>字号</b><span>只影响会话正文</span></div>
        <div class="row gap-8"><button class="btn btn-sm">−</button><span class="mono t-13">14</span><button class="btn btn-sm">＋</button></div>
      </div>
    </div>`,
});

/* --- overlays ------------------------------------------------------------ */

const mDrawer = () => `
  <div class="device device-phone">
    ${mStatusBar()}
    <div class="m-bar"><button class="m-bar-btn">${$('chevronLeft')}</button><div class="m-bar-title">给会话列表加归档</div><button class="m-bar-btn">${$('more')}</button></div>
    <div class="m-body" style="padding:14px 16px">
      <div class="turn-user"><div class="bubble-user" style="background:var(--fill);border-radius:16px">会话列表没法归档，删了就找不回来了。</div></div>
      <div class="who mt-16"><span class="who-mark">D</span><span>DeepSeek</span></div>
      <div class="prose t-13"><p>改成软归档，先看删除路径。</p></div>
    </div>
    <div class="m-scrim"></div>
    <div style="position:absolute;left:0;top:0;bottom:0;width:300px;background:var(--panel-2);box-shadow:var(--shadow-pop);padding-top:52px">
      <div class="p-14"><button class="new-session" style="height:40px">${$('plus')}<span>新建会话</span></button></div>
      <div style="padding:0 10px">
        <button class="side-nav-item">${$('puzzle')}<span>插件</span></button>
        <button class="side-nav-item">${$('clock')}<span>自动化任务</span></button>
      </div>
      <div class="m-group-label">工作区</div>
      ${['流萤漫剧', '插件推广', 'dsh 手机版 UI', '语音操作'].map((t, i) => `<button class="m-row" style="min-height:44px"><span class="m-row-main"><span class="m-row-title" style="${i === 0 ? 'font-weight:600' : ''}">${t}</span></span></button>`).join('')}
    </div>
  </div>`;

const mActions = () => `
  <div class="device device-phone">
    ${mStatusBar()}
    <div class="m-bar"><span></span><div class="m-bar-title">会话</div><button class="m-bar-btn">${$('more')}</button></div>
    <div class="m-body">
      <div class="m-pad"><div style="height:38px;border-radius:10px;background:var(--fill);display:flex;align-items:center;gap:8px;padding:0 12px;color:var(--ink-3);font-size:14px">${$('search')}<span>搜索会话</span></div></div>
      ${mGroup('流萤漫剧', ['给会话列表加归档', '修复拖拽排序抖动', '把设置页拆成两级'].map((t, i) => `<button class="m-row" style="${i === 0 ? 'background:var(--fill-2)' : ''}"><span class="m-row-main"><span class="m-row-title">${t}</span><span class="m-row-sub">流萤漫剧 · ${i === 0 ? '2 分钟前' : i === 1 ? '1 小时前' : '3 小时前'}</span></span></button>`).join(''))}
    </div>
    ${mSheet({ title: '给会话列表加归档', items: [['edit', '重命名', ''], ['copy', '复制会话 ID', ''], ['layers', '复制到新会话', '']] })}
  </div>`;

const mPalette = () => mShell({
  title: '给会话列表加归档',
  body: `<div class="m-pad"><div class="turn-user"><div class="bubble-user" style="background:var(--fill);border-radius:16px">把测试也跑一遍</div></div></div>`,
  footer: mComposer({}),
  overlay: `
    <div class="m-scrim"></div>
    <div style="position:absolute;left:10px;right:10px;top:96px;background:var(--panel);border-radius:var(--r-lg);box-shadow:var(--shadow-pop);overflow:hidden">
      <div class="row gap-10 p-14" style="border-bottom:1px solid var(--line-2)">${$('search')}<span class="t-15">切换模型</span><span class="caret"></span></div>
      <div style="padding:6px">
        ${[['切换到 DeepSeek-V4.1', '当前', true], ['打开设置 · 模型', '', false], ['新建会话', '', false], ['压缩上下文', '/compact', false]]
          .map(([t, meta, cur]) => `<button class="pop-item" style="height:44px">${cur ? $('check') : '<span style="width:16px"></span>'}<span class="grow">${t}</span><span class="meta">${meta}</span></button>`).join('')}
      </div>
    </div>`,
});

/* ------------------------------------------------------------------ router */

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

const PAGES = [
  { group: '会话', id: 'conv', zh: '会话', en: 'chat', render: () => conversationPage() },
  { group: '会话', id: 'conv-plus', zh: '加号菜单', en: 'plus', render: () => conversationPage({ menu: popPlus() }) },
  { group: '会话', id: 'conv-at', zh: '引用菜单', en: '@', render: () => conversationPage({ menu: popAt() }) },
  { group: '会话', id: 'conv-slash', zh: '命令菜单', en: '/', render: () => conversationPage({ menu: popSlash() }) },
  { group: '会话', id: 'conv-busy', zh: '生成中', en: 'running', render: () => conversationPage({ busy: true, text: '再补一个恢复的测试' }) },
  { group: '会话', id: 'approval', zh: '权限审批', en: 'approval', render: approvalPage },
  { group: '会话', id: 'ask', zh: '提问', en: 'question', render: askPage },
  { group: '会话', id: 'plan', zh: '计划审阅', en: 'plan', render: planPage },
  { group: '会话', id: 'run', zh: '运行轨迹', en: 'trajectory', render: runPage },
  { group: '会话', id: 'agents', zh: '子代理', en: 'agents', render: agentsPage },

  { group: '工作区', id: 'diff', zh: '变更审阅', en: 'diff', render: diffPage },
  { group: '工作区', id: 'files', zh: '文件与代码', en: 'files', render: filesPage },
  { group: '工作区', id: 'browser', zh: '浏览器', en: 'browser', render: browserPage },
  { group: '工作区', id: 'terminal', zh: '终端', en: 'terminal', render: terminalPage },
  { group: '工作区', id: 'rail', zh: '详情栏', en: 'rail', render: () => conversationPage({ railMode: true }) },
  { group: '工作区', id: 'palette', zh: '命令面板', en: 'Cmd K', render: palettePage },

  { group: '管理', id: 'sessions', zh: '会话列表', en: 'sessions', render: sessionsPage },
  { group: '管理', id: 'search', zh: '搜索', en: 'search', render: searchPage },
  { group: '管理', id: 'jobs', zh: '后台任务', en: 'jobs', render: jobsPage },
  { group: '管理', id: 'automation', zh: '自动化', en: 'automation', render: automationPage },
  { group: '管理', id: 'goals', zh: '目标', en: 'goals', render: goalsPage },
  { group: '管理', id: 'plugins', zh: '插件', en: 'plugins', render: pluginsPage },

  { group: '设置', id: 'set-general', zh: '常规', en: 'general', render: setGeneral },
  { group: '设置', id: 'set-models', zh: '模型', en: 'models', render: setModels },
  { group: '设置', id: 'set-permissions', zh: '权限', en: 'permissions', render: setPermissions },
  { group: '设置', id: 'set-presets', zh: '预设', en: 'presets', render: setPresets },
  { group: '设置', id: 'set-appearance', zh: '外观', en: 'appearance', render: setAppearance },
  { group: '设置', id: 'set-shortcuts', zh: '快捷键', en: 'shortcuts', render: setShortcuts },
  { group: '设置', id: 'set-account', zh: '账户', en: 'account', render: setAccount },

  { group: '手机 · 会话', id: 'm-sessions', zh: '会话列表', en: 'home', render: mSessions },
  { group: '手机 · 会话', id: 'm-empty', zh: '新会话空态', en: 'empty', render: mEmpty },
  { group: '手机 · 会话', id: 'm-conv', zh: '会话', en: 'chat', render: mConv },
  { group: '手机 · 会话', id: 'm-conv-plus', zh: '加号菜单', en: 'plus', render: mConvPlus },
  { group: '手机 · 会话', id: 'm-conv-at', zh: '引用菜单', en: '@', render: mConvAt },
  { group: '手机 · 会话', id: 'm-conv-slash', zh: '命令菜单', en: '/', render: mConvSlash },
  { group: '手机 · 会话', id: 'm-approval', zh: '审批', en: 'approval', render: mApproval },
  { group: '手机 · 会话', id: 'm-ask', zh: '提问', en: 'question', render: mAsk },
  { group: '手机 · 会话', id: 'm-plan', zh: '计划', en: 'plan', render: mPlan },
  { group: '手机 · 会话', id: 'm-run', zh: '运行轨迹', en: 'trajectory', render: mRun },
  { group: '手机 · 会话', id: 'm-agents', zh: '子代理', en: 'agents', render: mAgents },
  { group: '手机 · 会话', id: 'm-search', zh: '搜索', en: 'search', render: mSearch },

  { group: '手机 · 工作区', id: 'm-diff', zh: '变更', en: 'diff', render: mDiff },
  { group: '手机 · 工作区', id: 'm-files', zh: '文件', en: 'files', render: mFiles },
  { group: '手机 · 工作区', id: 'm-code', zh: '代码', en: 'code', render: mCode },
  { group: '手机 · 工作区', id: 'm-terminal', zh: '终端', en: 'terminal', render: mTerminal },
  { group: '手机 · 工作区', id: 'm-browser', zh: '浏览器', en: 'browser', render: mBrowser },

  { group: '手机 · 管理', id: 'm-jobs', zh: '后台任务', en: 'jobs', render: mJobs },
  { group: '手机 · 管理', id: 'm-automation', zh: '自动化', en: 'automation', render: mAutomation },
  { group: '手机 · 管理', id: 'm-plugins', zh: '插件', en: 'plugins', render: mPlugins },
  { group: '手机 · 管理', id: 'm-new', zh: '新任务', en: 'new task', render: mNew },

  { group: '手机 · 设置', id: 'm-settings', zh: '设置', en: 'settings', render: mSettings },
  { group: '手机 · 设置', id: 'm-settings-detail', zh: '设置详情', en: 'detail', render: mSettingsDetail },

  { group: '手机 · 浮层', id: 'm-drawer', zh: '抽屉导航', en: 'drawer', render: mDrawer },
  { group: '手机 · 浮层', id: 'm-actions', zh: '会话操作卡', en: 'sheet', render: mActions },
  { group: '手机 · 浮层', id: 'm-palette', zh: '命令面板', en: 'cmd-k', render: mPalette },
];

const byId = new Map(PAGES.map((p) => [p.id, p]));

/* --- catalog + router ----------------------------------------------------
 * One renderer, one place that knows about page order, filtering, zoom and
 * keyboard. The previous version rebuilt everything on each navigation and had
 * no way to reach a page except scrolling a long list.
 */

let filter = 'all';
let query = '';
let zoom = 'fit';

const matches = (page) => {
  if (filter === 'mobile' && !page.id.startsWith('m-')) return false;
  if (filter === 'pc' && page.id.startsWith('m-')) return false;
  if (!query) return true;
  const hay = `${page.zh} ${page.en} ${page.group} ${page.id}`.toLowerCase();
  return hay.includes(query.toLowerCase());
};

const indexList = () => {
  const groups = [...new Set(PAGES.map((p) => p.group))];
  const html = groups.map((g) => {
    const rows = PAGES.filter((p) => p.group === g && matches(p));
    if (rows.length === 0) return '';
    return `
      <div class="index-group">
        <div class="index-group-label">${g}<span>${rows.length}</span></div>
        ${rows.map((p) => `
          <button class="index-item" data-page="${p.id}">
            <span>${p.zh}</span><span class="en">${p.en}</span>
          </button>`).join('')}
      </div>`;
  }).join('');
  return html || '<div class="index-empty">没有匹配的页面</div>';
};

const visiblePages = () => PAGES.filter(matches);

const fitStage = () => {
  const stage = document.querySelector('.stage');
  const device = stage?.querySelector('.device');
  if (!stage || !device) return;
  const pad = 52;
  const fitScale = Math.min(1, (stage.clientWidth - pad) / device.offsetWidth, (stage.clientHeight - pad) / device.offsetHeight);
  const scale = zoom === 'fit' ? fitScale : Math.min(Number(zoom), fitScale);
  device.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
  const label = document.querySelector('#page-note');
  if (label) label.dataset.scale = `${Math.round(scale * 100)}%`;
};

const paintIndex = () => {
  document.querySelector('#index').innerHTML = indexList();
  const current = location.hash.replace(/^#\/?/, '').split('?')[0];
  document.querySelectorAll('.index-item').forEach((el) => {
    el.setAttribute('aria-current', String(el.dataset.page === current));
  });
};

const go = (id) => { if (location.hash === `#/${id}`) render(); else location.hash = `#/${id}`; };

const step = (delta) => {
  const list = visiblePages();
  if (list.length === 0) return;
  const currentId = (location.hash.replace(/^#\/?/, '') || 'conv').split('?')[0];
  const at = list.findIndex((p) => p.id === currentId);
  const next = list[(at + delta + list.length) % list.length] ?? list[0];
  go(next.id);
};

function render() {
  const id = (location.hash.replace(/^#\/?/, '') || 'conv').split('?')[0];
  const page = byId.get(id) ?? byId.get('conv');
  const list = visiblePages();
  const at = Math.max(0, list.findIndex((p) => p.id === page.id));

  document.querySelector('#stage').innerHTML = page.render();
  document.querySelector('#page-title').textContent = page.zh;
  document.querySelector('#page-note').textContent = `${page.group} · ${page.en}`;
  const counter = document.querySelector('#page-count');
  if (counter) counter.textContent = `${at + 1} / ${list.length || PAGES.length}`;
  const sub = document.querySelector('#index-sub');
  if (sub) {
    const pc = PAGES.filter((p) => !p.id.startsWith('m-')).length;
    sub.textContent = `${PAGES.length} 个页面 · PC ${pc} · 手机 ${PAGES.length - pc}`;
  }
  paintIndex();
  fitStage();
}

/* --- wiring -------------------------------------------------------------- */

window.addEventListener('hashchange', render);
window.addEventListener('resize', fitStage);

document.addEventListener('click', (event) => {
  const item = event.target.closest('.index-item');
  if (item) { go(item.dataset.page); return; }

  const filterBtn = event.target.closest('.index-filter');
  if (filterBtn) {
    filter = filterBtn.dataset.filter;
    document.querySelectorAll('.index-filter').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.filter === filter)));
    paintIndex();
    render();
    return;
  }

  const deviceBtn = event.target.closest('[data-device]');
  if (deviceBtn) {
    zoom = deviceBtn.dataset.device;
    document.querySelectorAll('[data-device]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.device === zoom)));
    fitStage();
    return;
  }

  if (event.target.closest('#prev-page')) { step(-1); return; }
  if (event.target.closest('#next-page')) { step(1); return; }

  const themeBtn = event.target.closest('[data-theme-toggle]');
  if (themeBtn) {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    themeBtn.textContent = next === 'dark' ? '浅色' : '深色';
    themeBtn.setAttribute('aria-pressed', String(next === 'dark'));
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id !== 'page-search') return;
  query = event.target.value.trim();
  paintIndex();
});

document.addEventListener('keydown', (event) => {
  const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    document.querySelector('#page-search')?.focus();
    document.querySelector('#page-search')?.select();
    return;
  }
  if (typing) {
    if (event.key === 'Escape') document.activeElement.blur();
    return;
  }
  if (event.key === 'ArrowRight') { step(1); return; }
  if (event.key === 'ArrowLeft') { step(-1); return; }
  if (event.key === 'Escape') { query = ''; const box = document.querySelector('#page-search'); if (box) box.value = ''; paintIndex(); }
});

render();
