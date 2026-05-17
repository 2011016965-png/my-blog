// === Firebase 初始化 ===
const firebaseConfig = {
  apiKey: "AIzaSyAIjFghcY7cM2IH9s0HByisCtKM9hy4RQU",
  authDomain: "my-blog-10418.firebaseapp.com",
  projectId: "my-blog-10418",
  storageBucket: "my-blog-10418.firebasestorage.app",
  messagingSenderId: "483377538646",
  appId: "1:483377538646:web:520ff6348ddc073a0ebdf7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// === 初始示例文章 ===
const SEED_ARTICLES = [
  {
    id: 1,
    title: "开始写博客了",
    date: "2026-05-10",
    category: "随笔",
    summary: "这是我的第一篇博客，记录一下开始写博客的心情和初衷。",
    body: `<p>一直想有一个属于自己的地方，可以记录思考、分享知识。今天终于动手做了出来。</p>
<p>这个博客完全用纯 HTML、CSS 和 JavaScript 构建，没有使用任何框架或构建工具。简单、轻量，而且完全可控。</p>
<h2>为什么要写博客</h2>
<p>写作是整理思考的最好方式。当你把想法写下来的时候，那些模糊的概念会变得清晰，碎片化的知识会形成体系。</p>
<p>另外，写作也是一种分享。你在项目中踩过的坑、学到的小技巧，也许正好能帮到在搜索引擎另一端的某个人。</p>
<h2>接下来的计划</h2>
<p>我打算每周至少写一篇文章，内容涵盖前端技术、工作中遇到的问题以及生活中的一些感悟。保持持续输出，和读者一起成长。</p>
<p>感谢你的来访，希望这里的内容能给你带来一些价值。</p>`
  },
  {
    id: 2,
    title: "JavaScript 异步编程入门",
    date: "2026-05-12",
    category: "技术",
    summary: "理解 Promise、async/await 和事件循环，掌握现代 JavaScript 异步编程的核心概念。",
    body: `<p>JavaScript 的异步编程模型是每个前端开发者必须掌握的核心技能。从回调函数到 Promise，再到 async/await，异步编程的写法越来越优雅。</p>
<h2>从回调到 Promise</h2>
<p>早期的 JavaScript 异步操作依赖回调函数，但当多个异步操作需要串联时，回调嵌套会导致著名的"回调地狱"：</p>
<pre><code>getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMore(b, function(c) {
      console.log(c);
    });
  });
});</code></pre>
<p>Promise 的出现解决了这个问题，让我们可以用链式调用来组织异步操作：</p>
<pre><code>getData()
  .then(a => getMoreData(a))
  .then(b => getEvenMore(b))
  .then(c => console.log(c))
  .catch(err => console.error(err));</code></pre>
<h2>async/await：更自然的写法</h2>
<p>async/await 让异步代码看起来像同步代码，大大提高了可读性：</p>
<pre><code>async function fetchAll() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMore(b);
    console.log(c);
  } catch (err) {
    console.error(err);
  }
}</code></pre>
<h2>事件循环</h2>
<p>理解事件循环对于写好 JavaScript 至关重要。JavaScript 是单线程的，但通过事件循环和任务队列，它能够高效地处理异步操作。宏任务和微任务的执行顺序也是面试中的高频考点。</p>`
  },
  {
    id: 3,
    title: "VS Code 效率提升指南",
    date: "2026-05-14",
    category: "技术",
    summary: "分享一些 VS Code 的实用技巧和快捷键，让你的编码效率翻倍。",
    body: `<p>VS Code 是目前最流行的代码编辑器，但它强大的功能往往被低估。今天分享几个能显著提升效率的技巧。</p>
<h2>命令面板（Ctrl+Shift+P）</h2>
<p>几乎所有 VS Code 操作都可以通过命令面板完成。记住这个快捷键，你几乎不需要碰鼠标。</p>
<h2>多光标编辑</h2>
<p>按住 Alt 键点击可以在多个位置同时编辑。按 Ctrl+D 可以选中下一个相同的单词，批量重命名非常方便。</p>
<h2>代码片段</h2>
<p>你可以自定义代码片段，把常用的模板保存起来。比如输入 <code>clg</code> 自动展开为 <code>console.log()</code>。</p>
<h2>集成终端</h2>
<p>按 Ctrl+\` 打开内置终端，不需要切换窗口就能运行命令。配合分屏功能，一边写代码一边看输出效果。</p>
<p>这些小技巧看起来不起眼，但日积月累能省下大量时间。建议每天学一个快捷键，一个月后你的操作速度会明显提升。</p>`
  },
  {
    id: 4,
    title: "周末徒步记",
    date: "2026-05-15",
    category: "生活",
    summary: "周末和朋友们一起去郊外徒步，远离屏幕，感受大自然的美好。",
    body: `<p>上周末天气特别好，约了几个朋友一起去郊外的山林徒步。全程大概 12 公里，虽然有点累，但非常值得。</p>
<h2>出发</h2>
<p>早上 8 点集合，开车一个半小时到达山脚。一开始是缓坡，大家边走边聊天，气氛轻松愉快。</p>
<h2>登顶</h2>
<p>后半段坡度变陡，队伍渐渐安静下来，只听到脚步声和喘息声。但当爬到山顶的那一刻，开阔的视野和迎面吹来的凉风让所有的疲惫都烟消云散。</p>
<h2>感悟</h2>
<p>平时整天盯着屏幕，很容易陷入一种"隧道视野"，觉得代码、Bug、Deadline 就是全世界。但站在山顶往远处看的时候，会觉得那些焦虑其实没那么重要。</p>
<p>偶尔把自己从数字世界里抽离出来，走进真实的山川湖海，是一种很好的充电方式。下个月计划去更远一点的地方露营。</p>`
  }
];

// === 全局文章列表 ===
let articles = [];

// === 从 Firestore 加载文章 ===
async function loadArticles() {
  try {
    const snapshot = await db.collection('articles').orderBy('createdAt', 'desc').get();
    const firestoreArticles = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: data.originId || doc.id,
        title: data.title,
        date: data.date,
        category: data.category,
        summary: data.summary,
        body: data.body
      };
    });
    // 合并：种子文章 + 云端文章，去重（云端覆盖同 id 种子文章）
    const seedIds = new Set(SEED_ARTICLES.map(a => String(a.id)));
    const cloudIds = new Set(firestoreArticles.map(a => String(a.id)));
    const merged = [...firestoreArticles];
    SEED_ARTICLES.forEach(a => {
      if (!cloudIds.has(String(a.id))) {
        merged.push(a);
      }
    });
    // 按日期降序排列
    merged.sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
    articles = merged;
  } catch (e) {
    console.warn('无法加载云端文章，使用本地文章', e);
    articles = [...SEED_ARTICLES];
  }
}

// === 保存文章到 Firestore ===
async function saveArticle(title, category, bodyHTML) {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const summary = bodyHTML.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
  const originId = 'u-' + Date.now();

  await db.collection('articles').add({
    title: title,
    category: category,
    date: dateStr,
    summary: summary + (summary.length >= 120 ? '...' : ''),
    body: bodyHTML,
    originId: originId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  return originId;
}

// === Markdown 转 HTML（简易） ===
function markdownToHTML(md) {
  let html = md;
  // 转义 HTML
  html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // 代码块 ```
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  // 行内代码 ``
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // 标题 ###
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  // 标题 ##
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  // 标题 #
  html = html.replace(/^# (.+)$/gm, '<h2>$1</h2>');
  // 粗体
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // 斜体
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // 空行分隔段落
  html = html.replace(/\n\n/g, '</p><p>');
  // 单换行变 <br>
  html = html.replace(/\n/g, '<br>');
  // 包裹段落
  html = '<p>' + html + '</p>';
  // 清理空段落
  html = html.replace(/<p><\/p>/g, '');
  // 清理 pre 内的 br
  html = html.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, function(m, inner) {
    return '<pre><code>' + inner.replace(/<br>/g, '\n').replace(/<p>/g, '').replace(/<\/p>/g, '') + '</code></pre>';
  });
  return html;
}

// === 渲染文章列表 ===
function renderHome(query) {
  const list = document.getElementById('article-list');
  const empty = document.getElementById('search-empty');
  const q = (query || '').toLowerCase().trim();

  const filtered = articles.filter(a =>
    !q || a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    list.innerHTML = filtered.map(a => `
      <div class="article-card" onclick="location.hash='#/post/${a.id}'">
        <span class="category">${a.category}</span>
        <h2>${a.title}</h2>
        <div class="meta">
          <span>📅 ${a.date}</span>
          <span>🏷 ${a.category}</span>
        </div>
        <p class="summary">${a.summary}</p>
      </div>
    `).join('');
  }
}

// === Giscus 评论 ===
const GISCUS_CONFIG = {
  repo: '2011016965-png/my-blog',
  repoId: 'R_kgDOSfF0LA',
  category: 'Announcements',
  categoryId: 'DIC_kwDOSfF0LM4C9LHo'
};

function loadGiscus(term) {
  const oldScript = document.querySelector('script[src*="giscus"]');
  if (oldScript) oldScript.remove();
  const oldFrame = document.querySelector('#giscus-container iframe');
  if (oldFrame) oldFrame.remove();

  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', GISCUS_CONFIG.repo);
  script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
  script.setAttribute('data-category', GISCUS_CONFIG.category);
  script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
  script.setAttribute('data-mapping', 'specific');
  script.setAttribute('data-term', term);
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'light');
  script.setAttribute('data-lang', 'zh-CN');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;
  document.getElementById('giscus-container').appendChild(script);
}

// === 渲染文章详情 ===
function renderPost(id) {
  const article = articles.find(a => String(a.id) === String(id));
  if (!article) return;

  document.getElementById('post-content').innerHTML = `
    <div class="post-header">
      <h1>${article.title}</h1>
      <div class="meta">
        <span>📅 ${article.date}</span>
        <span class="category">${article.category}</span>
      </div>
    </div>
    <div class="post-body">${article.body}</div>
  `;

  loadGiscus('post-' + id);
}

// === 路由 ===
function route() {
  const hash = location.hash.slice(1) || '/';
  const homePage = document.getElementById('home-page');
  const postPage = document.getElementById('post-page');
  const publishPage = document.getElementById('publish-page');

  homePage.style.display = 'none';
  postPage.style.display = 'none';
  publishPage.style.display = 'none';

  const postMatch = hash.match(/^\/post\/(\S+)$/);

  if (hash === '/publish') {
    publishPage.style.display = 'block';
    document.getElementById('publish-success').style.display = 'none';
    document.getElementById('publish-form').style.display = '';
    window.scrollTo(0, 0);
  } else if (postMatch) {
    postPage.style.display = 'block';
    renderPost(postMatch[1]);
    window.scrollTo(0, 0);
  } else {
    homePage.style.display = 'block';
    document.getElementById('search-input').value = '';
    renderHome('');
  }
}

window.addEventListener('hashchange', route);

// === 初始化 ===
document.addEventListener('DOMContentLoaded', async function() {
  await loadArticles();

  document.getElementById('search-input').addEventListener('input', function() {
    renderHome(this.value);
  });

  document.getElementById('back-btn').addEventListener('click', function() {
    location.hash = '#/';
  });

  document.getElementById('back-btn2').addEventListener('click', function() {
    location.hash = '#/';
  });

  document.getElementById('publish-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('publish-title').value.trim();
    const category = document.getElementById('publish-category').value;
    const bodyMD = document.getElementById('publish-body').value.trim();
    if (!title || !category || !bodyMD) return;

    const btn = this.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = '发布中...';

    try {
      const bodyHTML = markdownToHTML(bodyMD);
      const newId = await saveArticle(title, category, bodyHTML);
      // 添加到本地列表头部
      const now = new Date();
      const dateStr = now.toISOString().split('T')[0];
      const summary = bodyHTML.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120);
      articles.unshift({
        id: newId,
        title: title,
        date: dateStr,
        category: category,
        summary: summary + (summary.length >= 120 ? '...' : ''),
        body: bodyHTML
      });
      this.style.display = 'none';
      document.getElementById('publish-success').style.display = 'block';
    } catch (err) {
      alert('发布失败：' + err.message);
    }

    btn.disabled = false;
    btn.textContent = '发布';
  });

  route();
});
