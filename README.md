<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>最新地址发布页</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      padding: 2em;
      max-width: 700px;
      margin: auto;
      line-height: 1.6;
    }
    h1 {
      color: #333;
    }
    .section {
      background: white;
      border-radius: 10px;
      padding: 1em 1.5em;
      margin-bottom: 1.5em;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    .section h2 {
      margin-top: 0;
    }
    ul {
      padding-left: 1.2em;
    }
    li a {
      color: #0077cc;
      text-decoration: none;
    }
    .highlight {
      color: #d00;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>🔗 91发布页</h1>
  <p><strong>Ctrl+D 收藏此页，永不迷路！</strong></p>

  <div class="section">
    <h2>📌 固定最新地址</h2>
    <ul>
      <li><a href="https://pku.wdzdtxcu.xyz" target="_blank">https://pku.wdzdtxcu.xyz</a></li>
      <li><a href="https://xjtu.wdzdtxcu.xyz" target="_blank">https://xjtu.wdzdtxcu.xyz</a></li>
      <li><a href="https://xmu.wdzdtxcu.xyz" target="_blank">https://xmu.wdzdtxcu.xyz</a></li>
    </ul>
  </div>

  <div class="section" id="dynamic-url">
    <h2>⚡ 自动更新地址</h2>
    <p>正在加载，请稍候...</p>
  </div>

  <div class="section">
    <h2>🛠️ 访问失败解决方法</h2>
    <ul>
      <li>使用 <strong>Chrome</strong> 或 <strong>Safari</strong> 浏览器</li>
      <li>通过 <code>https://</code> 协议访问地址</li>
      <li>设置 DNS 为 <code>8.8.8.8</code> 和 <code>1.1.1.1</code></li>
      <li>必要时使用 VPN 或代理工具</li>
    </ul>
  </div>

  <script>
    // 模拟从服务器获取动态地址（你可以改成 fetch 从远程 JSON 获取）
    function getSpecificJSONValue(key) {
      const mockData = {
        "share.91porn_web": "https://bf716.abprusq.xyz"
      };
      return mockData[key];
    }

    // 插入到页面中
    const realUrl = getSpecificJSONValue("share.91porn_web");
    const container = document.getElementById("dynamic-url");
    container.innerHTML = `
      <h2>⚡ 自动更新地址</h2>
      <p>请访问最新入口：</p>
      <p><a class="highlight" href="${realUrl}" target="_blank">${realUrl}</a></p>
    `;
  </script>

</body>
</html>

