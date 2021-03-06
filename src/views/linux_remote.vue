<template>
  <div class="markdown-body">
    <h1 id="toc_0">远程管理常用命令</h1>

    <h2 id="toc_1">目标</h2>

    <ul>
      <li>
        关机/重启
        <ul>
          <li>
            <code>shutdown</code>
          </li>
        </ul>
      </li>
      <li>
        查看或配置网卡信息
        <ul>
          <li>
            <code>ifconfig</code>
          </li>
          <li>
            <code>ping</code>
          </li>
        </ul>
      </li>
      <li>
        远程登录和复制文件
        <ul>
          <li>
            <code>ssh</code>
          </li>
          <li>
            <code>scp</code>
          </li>
        </ul>
      </li>
    </ul>

    <h2 id="toc_2">01. 关机/重启</h2>

    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>命令</th>
          <th>对应英文</th>
          <th>作用</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td>shutdown 选项 时间</td>
          <td>shutdown</td>
          <td>关机／重新启动</td>
        </tr>
      </tbody>
    </table>

    <h3 id="toc_3">
      1.1
      <code>shutdown</code>
    </h3>

    <ul>
      <li>
        <code>shutdown</code> 命令可以
        <strong>安全</strong>
        <strong>关闭</strong> 或者
        <strong>重新启动系统</strong>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>选项</th>
          <th>含义</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>-r</td>
          <td>重新启动</td>
        </tr>
      </tbody>
    </table>

    <blockquote>
      <p>提示：</p>

      <ul>
        <li>
          <strong>不指定选项和参数</strong>，默认表示
          <strong>1 分钟</strong>之后
          <strong>关闭电脑</strong>
        </li>
        <li>远程维护服务器时，最好不要关闭系统，而应该重新启动系统</li>
      </ul>
    </blockquote>

    <ul>
      <li>常用命令示例</li>
    </ul>

    <pre><code class="language-bash"># 重新启动操作系统，其中 now 表示现在
$ shutdown -r now

# 立刻关机，其中 now 表示现在
$ shutdown now

# 系统在今天的 20:25 会关机
$ shutdown 20:25

# 系统再过十分钟后自动关机
$ shutdown +10

# 取消之前指定的关机计划
$ shutdown -c
</code></pre>

    <h2 id="toc_4">02. 查看或配置网卡信息</h2>

    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>命令</th>
          <th>对应英文</th>
          <th>作用</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td>ifconfig</td>
          <td>configure a network interface</td>
          <td>查看/配置计算机当前的网卡配置信息</td>
        </tr>
        <tr>
          <td>02</td>
          <td>ping ip地址</td>
          <td>ping</td>
          <td>检测到目标 ip地址 的连接是否正常</td>
        </tr>
      </tbody>
    </table>

    <h3 id="toc_5">2.1 网卡 和 IP 地址</h3>

    <h4 id="toc_6">网卡</h4>

    <ul>
      <li>网卡是一个专门负责网络通讯的硬件设备</li>
      <li>
        <strong>IP 地址</strong>是设置在网卡上的地址信息
      </li>
    </ul>

    <blockquote>
      <p>
        我们可以把
        <strong>电脑</strong> 比作
        <strong>电话</strong>，
        <strong>网卡</strong> 相当于
        <strong>SIM 卡</strong>，
        <strong>IP 地址</strong> 相当于
        <strong>电话号码</strong>
      </p>
    </blockquote>

    <h4 id="toc_7">IP 地址</h4>

    <ul>
      <li>
        <strong>每台联网的电脑上</strong>都有
        <strong>IP 地址</strong>，
        <strong>是保证电脑之间正常通讯的重要设置</strong>
      </li>
    </ul>

    <blockquote>
      <p>注意：每台电脑的 IP 地址不能相同，否则会出现 IP 地址冲突，并且没有办法正常通讯</p>

      <p>
        提示：有关
        <strong>IP 地址</strong>的详细内容，在就业班会详细讲解！
      </p>
    </blockquote>

    <h3 id="toc_8">
      2.2
      <code>ifconfig</code>
    </h3>

    <ul>
      <li>
        <code>ifconfig</code> 可以查看／配置计算机当前的网卡配置信息
      </li>
    </ul>

    <pre><code class="language-bash"># 查看网卡配置信息
$ ifconfig

# 查看网卡对应的 IP 地址
$ ifconfig | grep inet
</code></pre>

    <blockquote>
      <p>
        提示：一台计算机中有可能会有一个
        <strong>物理网卡</strong> 和
        <strong>多个虚拟网卡</strong>，在 Linux 中物理网卡的名字通常以
        <code>ensXX</code> 表示
      </p>
    </blockquote>

    <ul>
      <li>
        <code>127.0.0.1</code> 被称为
        <strong>本地回环/环回地址</strong>，一般用来测试本机网卡是否正常
      </li>
    </ul>

    <h3 id="toc_9">
      2.3
      <code>ping</code>
    </h3>

    <pre><code class="language-bash"># 检测到目标主机是否连接正常
$ ping IP地址

# 检测本地网卡工作正常
$ ping 127.0.0.1
</code></pre>

    <ul>
      <li>
        <code>ping</code> 一般用于检测当前计算机到目标计算机之间的网络
        <strong>是否通畅</strong>，
        <strong>数值越大，速度越慢</strong>
      </li>
    </ul>

    <blockquote>
      <ul>
        <li>
          <code>ping</code> 的工作原理与潜水艇的声纳相似，
          <code>ping</code> 这个命令就是取自
          <strong>声纳的声音</strong>
        </li>
        <li>
          网络管理员之间也常将
          <code>ping</code> 用作动词 ——
          <strong>ping 一下计算机X，看他是否开着</strong>
        </li>
      </ul>
    </blockquote>

    <p>
      原理：网络上的机器都有
      <strong>唯一确定的 IP 地址</strong>，我们给
      <strong>目标 IP 地址</strong>发送一个数据包，对方就要返回一个数据包，根据返回的数据包以及时间，我们可以确定目标主机的存在
    </p>

    <blockquote>
      <p>
        提示：在 Linux 中，想要终止一个终端程序的执行，绝大多数都可以使用
        <code>CTRL + C</code>
      </p>
    </blockquote>

    <h2 id="toc_10">03. 远程登录和复制文件</h2>

    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>命令</th>
          <th>对应英文</th>
          <th>作用</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td>ssh 用户名@ip</td>
          <td>secure shell</td>
          <td>关机／重新启动</td>
        </tr>
        <tr>
          <td>02</td>
          <td>scp 用户名@ip:文件名或路径 用户名@ip:文件名或路径</td>
          <td>secure copy</td>
          <td>远程复制文件</td>
        </tr>
      </tbody>
    </table>

    <h3 id="toc_11">
      3.1
      <code>ssh</code> 基础（重点）
    </h3>

    <p>
      在 Linux 中 SSH 是
      <strong>非常常用</strong> 的工具，通过
      <strong>SSH 客户端</strong> 我们可以连接到运行了
      <strong>SSH 服务器</strong> 的远程机器上
    </p>

    <p>
      <img src="../assets/images/linux_01.png" alt="001_SSH示意图" />￼
    </p>

    <ul>
      <li>
        <strong>SSH 客户端</strong>是一种使用
        <code>Secure Shell（SSH）</code> 协议连接到远程计算机的软件程序
      </li>
      <li>
        <code>SSH</code> 是目前较可靠，
        <strong>专为远程登录会话和其他网络服务</strong>
 提供安全性的协议
        <ul>
          <li>
            利用
            <code>SSH 协议</code> 可以有效
            <strong>防止远程管理过程中的信息泄露</strong>
          </li>
          <li>
            通过
            <code>SSH 协议</code> 可以对所有传输的数据进行加密，也能够防止 DNS 欺骗和 IP 欺骗
          </li>
        </ul>
      </li>
      <li>
        <code>SSH</code> 的另一项优点是传输的数据可以是经过压缩的，所以可以加快传输的速度
      </li>
    </ul>

    <h4 id="toc_12">1) 域名 和 端口号</h4>

    <h5 id="toc_13">域名</h5>

    <ul>
      <li>
        由一串
        <strong>用点分隔</strong> 的名字组成，例如：
        <code>www.itcast.cn</code>
      </li>
      <li>
        是
        <strong>IP 地址</strong> 的别名，方便用户记忆
      </li>
    </ul>

    <h5 id="toc_14">端口号</h5>

    <ul>
      <li>
        <strong>IP 地址</strong>：通过
        <strong>IP 地址</strong> 找到网络上的
        <strong>计算机</strong>
      </li>
      <li>
        <p>
          <strong>端口号</strong>：通过
          <strong>端口号</strong> 可以找到
          <strong>计算机上运行的应用程序</strong>
        </p>

        <ul>
          <li>
            <strong>SSH 服务器</strong> 的默认端口号是
            <code>22</code>，如果是默认端口号，在连接的时候，可以省略
          </li>
        </ul>
      </li>
      <li>
        <p>常见服务端口号列表：</p>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>服务</th>
          <th>端口号</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td>SSH 服务器</td>
          <td>22</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Web 服务器</td>
          <td>80</td>
        </tr>
        <tr>
          <td>03</td>
          <td>HTTPS</td>
          <td>443</td>
        </tr>
        <tr>
          <td>04</td>
          <td>FTP 服务器</td>
          <td>21</td>
        </tr>
      </tbody>
    </table>

    <blockquote>
      <p>
        提示：有关
        <strong>端口号</strong>的详细内容，在就业班会详细讲解！
      </p>
    </blockquote>

    <h4 id="toc_15">2) SSH 客户端的简单使用</h4>

    <pre><code class="language-bash">ssh [-p port] user@remote
</code></pre>

    <ul>
      <li>
        <code>user</code> 是在远程机器上的用户名，如果不指定的话默认为当前用户
      </li>
      <li>
        <code>remote</code> 是远程机器的地址，可以是
        <strong>IP</strong>／
        <strong>域名</strong>，或者是
        <strong>后面会提到的别名</strong>
      </li>
      <li>
        <code>port</code> 是
        <strong>SSH Server 监听的端口</strong>，如果不指定，就为默认值
        <code>22</code>
      </li>
    </ul>

    <blockquote>
      <p>提示：</p>

      <ul>
        <li>
          使用
          <code>exit</code> 退出当前用户的登录
        </li>
      </ul>

      <p>注意：</p>

      <ul>
        <li>
          <code>ssh</code> 这个终端命令只能在
          <code>Linux</code> 或者
          <code>UNIX</code> 系统下使用
        </li>
        <li>
          如果在
          <code>Windows</code> 系统中，可以安装
          <code>PuTTY</code> 或者
          <code>XShell</code> 客户端软件即可
        </li>
      </ul>

      <p>提示：</p>

      <ul>
        <li>
          在工作中，SSH 服务器的端口号很有可能
          <strong>不是 22</strong>，如果遇到这种情况就需要使用
          <code>-p</code> 选项，指定正确的端口号，否则无法正常连接到服务器
        </li>
      </ul>
    </blockquote>

    <h4 id="toc_16">3) Windows 下 SSH 客户端的安装</h4>

    <ul>
      <li>
        <code>Putty</code>
        <a
          href="http://www.chiark.greenend.org.uk/%7Esgtatham/putty/latest.html"
        >http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html</a>
      </li>
      <li>
        <code>XShell</code>
        <a href="http://xshellcn.com">http://xshellcn.com</a>
      </li>
    </ul>

    <blockquote>
      <p>建议从官方网站下载正式的安装程序</p>
    </blockquote>

    <h3 id="toc_17">
      3.2
      <code>scp</code>（掌握）
    </h3>

    <ul>
      <li>
        scp 就是
        <code>secure copy</code>，是一个在 Linux 下用来进行
        <strong>远程拷贝文件</strong> 的命令
      </li>
      <li>
        它的
        <strong>地址格式与 ssh 基本相同</strong>，
        <strong>需要注意的是</strong>，在指定端口时用的是大写的
        <code>-P</code> 而不是小写的
      </li>
    </ul>

    <p>
      <img src="../assets/images/linux_02.png" alt="002_SCP示意图" />￼
    </p>

    <pre><code class="language-bash"># 把本地当前目录下的 01.py 文件 复制到 远程 家目录下的 Desktop/01.py
# 注意：`:` 后面的路径如果不是绝对路径，则以用户的家目录作为参照路径
scp -P port 01.py user@remote:Desktop/01.py

# 把远程 家目录下的 Desktop/01.py 文件 复制到 本地当前目录下的 01.py
scp -P port user@remote:Desktop/01.py 01.py

# 加上 -r 选项可以传送文件夹
# 把当前目录下的 demo 文件夹 复制到 远程 家目录下的 Desktop
scp -r demo user@remote:Desktop

# 把远程 家目录下的 Desktop 复制到 当前目录下的 demo 文件夹
scp -r user@remote:Desktop demo
</code></pre>

    <table>
      <thead>
        <tr>
          <th>选项</th>
          <th>含义</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>-r</td>
          <td>若给出的源文件是目录文件，则 scp 将递归复制该目录下的所有子目录和文件，目标文件必须为一个目录名</td>
        </tr>
        <tr>
          <td>-P</td>
          <td>若远程 SSH 服务器的端口不是 22，需要使用大写字母 -P 选项指定端口</td>
        </tr>
      </tbody>
    </table>

    <blockquote>
      <p>注意：</p>

      <ul>
        <li>
          <code>scp</code> 这个终端命令只能在
          <code>Linux</code> 或者
          <code>UNIX</code> 系统下使用
        </li>
        <li>
          如果在
          <code>Windows</code> 系统中，可以安装
          <code>PuTTY</code>，使用
          <code>pscp</code> 命令行工具或者安装
          <code>FileZilla</code> 使用
          <code>FTP</code> 进行文件传输
        </li>
      </ul>
    </blockquote>

    <h4 id="toc_18">
      <code>FileZilla</code>
    </h4>

    <ul>
      <li>
        官方网站：
        <a href="https://www.filezilla.cn/download/client">https://www.filezilla.cn/download/client</a>
      </li>
      <li>
        <code>FileZilla</code> 在传输文件时，使用的是
        <code>FTP 服务</code> 而不是
        <code>SSH 服务</code>，因此端口号应该设置为
        <code>21</code>
      </li>
    </ul>

    <h3 id="toc_19">3.3 SSH 高级（知道）</h3>

    <ul>
      <li>免密码登录</li>
      <li>配置别名</li>
    </ul>

    <blockquote>
      <p>
        提示：有关 SSH 配置信息都保存在用户家目录下的
        <code>.ssh</code> 目录下
      </p>
    </blockquote>

    <h4 id="toc_20">1）免密码登录</h4>

    <h5 id="toc_21">步骤</h5>

    <ul>
      <li>
        配置公钥
        <ul>
          <li>
            执行
            <code>ssh-keygen</code> 即可生成 SSH 钥匙，一路回车即可
          </li>
        </ul>
      </li>
      <li>
        上传公钥到服务器
        <ul>
          <li>
            执行
            <code>ssh-copy-id -p port user@remote</code>，可以让远程服务器记住我们的公钥
          </li>
        </ul>
      </li>
    </ul>

    <h5 id="toc_22">示意图</h5>

    <p>
      <img
        src="../assets/images/linux_03.png"
        alt="003_SSH 免密码示意图"
      />￼
    </p>

    <blockquote>
      <p>非对称加密算法</p>

      <ul>
        <li>
          使用
          <strong>公钥</strong> 加密的数据，需要使用
          <strong>私钥</strong> 解密
        </li>
        <li>
          使用
          <strong>私钥</strong> 加密的数据，需要使用
          <strong>公钥</strong> 解密
        </li>
      </ul>
    </blockquote>

    <h4 id="toc_23">2) 配置别名</h4>

    <p>
      每次都输入
      <code>ssh -p port user@remote</code>，时间久了会觉得很麻烦，特别是当
      <code>user</code>,
      <code>remote</code> 和
      <code>port</code> 都得输入，而且还不好记忆
    </p>

    <p>
      而
      <strong>配置别名</strong> 可以让我们进一步偷懒，譬如用：
      <code>ssh mac</code> 来替代上面这么一长串，那么就在
      <code>~/.ssh/config</code> 里面追加以下内容：
    </p>

    <pre><code>Host mac
    HostName ip地址
    User itheima
    Port 22
</code></pre>

    <p>
      <strong>
        保存之后，即可用
        <code>ssh mac</code> 实现远程登录了，
        <code>scp</code> 同样可以使用
      </strong>
    </p>
  </div>
</template>