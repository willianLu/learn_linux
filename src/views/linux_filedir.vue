<template>
  <div class="markdown-body">
    <h1 id="toc_0">文件和目录常用命令</h1>
    <h2 id="toc_1">目标</h2>
    <ul>
      <li>
        查看目录内容
        <ul>
          <li>
            <code>ls</code>
          </li>
        </ul>
      </li>
      <li>
        切换目录
        <ul>
          <li>
            <code>cd</code>
          </li>
        </ul>
      </li>
      <li>
        创建和删除操作
        <ul>
          <li>
            <code>touch</code>
          </li>
          <li>
            <code>rm</code>
          </li>
          <li>
            <code>mkdir</code>
          </li>
        </ul>
      </li>
      <li>
        拷贝和移动文件
        <ul>
          <li>
            <code>cp</code>
          </li>
          <li>
            <code>mv</code>
          </li>
        </ul>
      </li>
      <li>
        查看文件内容
        <ul>
          <li>
            <code>cat</code>
          </li>
          <li>
            <code>more</code>
          </li>
          <li>
            <code>grep</code>
          </li>
        </ul>
      </li>
      <li>
        其他
        <ul>
          <li>
            <code>echo</code>
          </li>
          <li>
            重定向
            <code>&gt;</code> 和
            <code>&gt;&gt;</code>
          </li>
          <li>
            管道
            <code>|</code>
          </li>
        </ul>
      </li>
    </ul>
    <h2 id="toc_2">01. 查看目录内容</h2>
    <h3 id="toc_3">1.1 终端实用技巧</h3>
    <h4 id="toc_4">1&gt; 自动补全</h4>
    <ul>
      <li>
        在敲出
        <code>文件</code>／
        <code>目录</code>／
        <code>命令</code> 的前几个字母之后，按下
        <code>tab</code>
        键
        <ul>
          <li>如果输入的没有歧义，系统会自动补全</li>
          <li>
            如果还存在其他
            <code>文件</code>／
            <code>目录</code>／
            <code>命令</code>，再按一下
            <code>tab</code> 键，系统会提示可能存在的命令
          </li>
        </ul>
      </li>
    </ul>
    <h4 id="toc_5">2&gt; 曾经使用过的命令</h4>
    <ul>
      <li>
        按
        <code>上</code>／
        <code>下</code> 光标键可以在曾经使用过的命令之间来回切换
      </li>
      <li>
        如果想要退出选择，并且不想执行当前选中的命令，可以按
        <code>ctrl + c</code>
      </li>
    </ul>
    <h3 id="toc_6">
      1.2
      <code>ls</code> 命令说明
    </h3>
    <ul>
      <li>
        <code>ls</code> 是英文单词
        <strong>list</strong> 的简写，其功能为列出目录的内容，是用户最常用的命令之一，类似于
        <strong>DOS</strong> 下的
        <code>dir</code> 命令
      </li>
    </ul>
    <h4 id="toc_7">Linux 下文件和目录的特点</h4>
    <ul>
      <li>
        Linux
        <strong>文件</strong> 或者
        <strong>目录</strong> 名称最长可以有
        <code>256</code> 个字符
      </li>
      <li>
        以
        <code>.</code> 开头的文件为隐藏文件，需要用 -a 参数才能显示
      </li>
      <li>
        <strong>.</strong> 代表当前目录
      </li>
      <li>
        <strong>..</strong> 代表上一级目录
      </li>
    </ul>
    <h3 id="toc_8">1.3 ls 常用选项</h3>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-a</td>
          <td>显示指定目录下所有子目录与文件，包括隐藏文件</td>
        </tr>
        <tr>
          <td>-l</td>
          <td>以列表方式显示文件的详细信息</td>
        </tr>
        <tr>
          <td>-h</td>
          <td>配合 -l 以人性化的方式显示文件大小</td>
        </tr>
      </tbody>
    </table>
    <h4 id="toc_9">计算机中文件大小的表示方式（科普）</h4>
    <table>
      <thead>
        <tr>
          <th>单位</th>
          <th>英文</th>
          <th>含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>字节</td>
          <td>B（Byte）</td>
          <td>在计算机中作为一个数字单元，一般为 8 位二进制数</td>
        </tr>
        <tr>
          <td>千</td>
          <td>K（Kibibyte）</td>
          <td>1 KB = 1024 B，千字节 （1024 = 2 ** 10）</td>
        </tr>
        <tr>
          <td>兆</td>
          <td>M（Mebibyte）</td>
          <td>1 MB = 1024 KB，百万字节</td>
        </tr>
        <tr>
          <td>千兆</td>
          <td>G（Gigabyte）</td>
          <td>1 GB = 1024 MB，十亿字节，千兆字节</td>
        </tr>
        <tr>
          <td>太</td>
          <td>T（Terabyte）</td>
          <td>1 TB = 1024 GB，万亿字节，太字节</td>
        </tr>
        <tr>
          <td>拍</td>
          <td>P（Petabyte）</td>
          <td>1 PB = 1024 TB，千万亿字节，拍字节</td>
        </tr>
        <tr>
          <td>艾</td>
          <td>E（Exabyte）</td>
          <td>1 EB = 1024 PB，百亿亿字节，艾字节</td>
        </tr>
        <tr>
          <td>泽</td>
          <td>Z（Zettabyte）</td>
          <td>1 ZB = 1024 EB，十万亿亿字节，泽字节</td>
        </tr>
        <tr>
          <td>尧</td>
          <td>Y（Yottabyte）</td>
          <td>1 YB = 1024 ZB，一亿亿亿字节，尧字节</td>
        </tr>
      </tbody>
    </table>
    <h3 id="toc_10">1.4 ls 通配符的使用</h3>
    <table>
      <thead>
        <tr>
          <th>通配符</th>
          <th>含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>*</td>
          <td>代表任意个数个字符</td>
        </tr>
        <tr>
          <td>?</td>
          <td>代表任意一个字符，至少 1 个</td>
        </tr>
        <tr>
          <td>[]</td>
          <td>表示可以匹配字符组中的任一一个</td>
        </tr>
        <tr>
          <td>[abc]</td>
          <td>匹配 a、b、c 中的任意一个</td>
        </tr>
        <tr>
          <td>[a-f]</td>
          <td>匹配从 a 到 f 范围内的的任意一个字符</td>
        </tr>
      </tbody>
    </table>
    <h2 id="toc_11">02. 切换目录</h2>
    <h3 id="toc_12">
      2.1
      <code>cd</code>
    </h3>
    <ul>
      <li>
        <code>cd</code> 是英文单词
        <strong>change directory</strong> 的简写，其功能为更改当前的工作目录，也是用户最常用的命令之一
      </li>
    </ul>
    <blockquote>
      <p>
        注意：Linux 所有的
        <strong>目录</strong> 和
        <strong>文件名</strong> 都是大小写敏感的
      </p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th>命令</th>
          <th>含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>cd</td>
          <td>切换到当前用户的主目录(/home/用户目录)</td>
        </tr>
        <tr>
          <td>cd ~</td>
          <td>切换到当前用户的主目录(/home/用户目录)</td>
        </tr>
        <tr>
          <td>cd .</td>
          <td>保持在当前目录不变</td>
        </tr>
        <tr>
          <td>cd ..</td>
          <td>切换到上级目录</td>
        </tr>
        <tr>
          <td>cd -</td>
          <td>可以在最近两次工作目录之间来回切换</td>
        </tr>
      </tbody>
    </table>
    <h3 id="toc_13">2.2 相对路径和绝对路径</h3>
    <ul>
      <li>
        <strong>相对路径</strong> 在输入路径时，最前面不是
        <strong>/</strong> 或者
        <strong>~</strong>，表示相对
        <strong>当前目录</strong> 所在的目录位置
      </li>
      <li>
        <strong>绝对路径</strong> 在输入路径时，最前面是
        <strong>/</strong> 或者
        <strong>~</strong>，表示从
        <strong>根目录/家目录</strong> 开始的具体目录位置
      </li>
    </ul>
    <h2 id="toc_14">03. 创建和删除操作</h2>
    <h3 id="toc_15">
      3.1
      <code>touch</code>
    </h3>
    <ul>
      <li>
        创建文件或修改文件时间
        <ul>
          <li>
            如果文件
            <strong>不存在</strong>，可以创建一个空白文件
          </li>
          <li>
            如果文件
            <strong>已经存在</strong>，可以修改文件的末次修改日期
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="toc_16">
      3.2
      <code>mkdir</code>
    </h3>
    <ul>
      <li>创建一个新的目录</li>
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
          <td>-p</td>
          <td>可以递归创建目录</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>
        <strong>新建目录的名称</strong> 不能与当前目录中
        <strong>已有的目录或文件</strong> 同名
      </p>
    </blockquote>
    <h3 id="toc_17">
      3.3
      <code>rm</code>
    </h3>
    <ul>
      <li>删除文件或目录</li>
    </ul>
    <blockquote>
      <p>
        使用
        <code>rm</code> 命令要小心，因为文件删除后不能恢复
      </p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th>选项</th>
          <th>含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-f</td>
          <td>强制删除，忽略不存在的文件，无需提示</td>
        </tr>
        <tr>
          <td>-r</td>
          <td>
            递归地删除目录下的内容，
            <strong>删除文件夹</strong> 时必须加此参数
          </td>
        </tr>
      </tbody>
    </table>
    <h2 id="toc_18">04. 拷贝和移动文件</h2>
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
          <td>tree [目录名]</td>
          <td>tree</td>
          <td>以树状图列出文件目录结构</td>
        </tr>
        <tr>
          <td>02</td>
          <td>cp 源文件 目标文件</td>
          <td>copy</td>
          <td>复制文件或者目录</td>
        </tr>
        <tr>
          <td>03</td>
          <td>mv 源文件 目标文件</td>
          <td>move</td>
          <td>移动文件或者目录／文件或者目录重命名</td>
        </tr>
      </tbody>
    </table>
    <h3 id="toc_19">
      4.1
      <code>tree</code>
    </h3>
    <ul>
      <li>
        <code>tree</code> 命令可以以树状图列出文件目录结构
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
          <td>-d</td>
          <td>只显示目录</td>
        </tr>
      </tbody>
    </table>
    <h3 id="toc_20">
      4.2
      <code>cp</code>
    </h3>
    <ul>
      <li>
        <code>cp</code> 命令的功能是将给出的
        <strong>文件</strong> 或
        <strong>目录</strong> 复制到另一个
        <strong>文件</strong> 或
        <strong>目录</strong> 中，相当于
        <strong>DOS</strong> 下的
        <code>copy</code> 命令
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
          <td>-i</td>
          <td>覆盖文件前提示</td>
        </tr>
        <tr>
          <td>-r</td>
          <td>若给出的源文件是目录文件，则 cp 将递归复制该目录下的所有子目录和文件，目标文件必须为一个目录名</td>
        </tr>
      </tbody>
    </table>
    <h3 id="toc_21">
      4.3
      <code>mv</code>
    </h3>
    <ul>
      <li>
        <code>mv</code> 命令可以用来
        <strong>移动</strong>
        <strong>文件</strong> 或
        <strong>目录</strong>，也可以给
        <strong>文件或目录重命名</strong>
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
          <td>-i</td>
          <td>覆盖文件前提示</td>
        </tr>
      </tbody>
    </table>
    <h2 id="toc_22">05. 查看文件内容</h2>
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
          <td>cat 文件名</td>
          <td>concatenate</td>
          <td>查看文件内容、创建文件、文件合并、追加文件内容等功能</td>
        </tr>
        <tr>
          <td>02</td>
          <td>more 文件名</td>
          <td>more</td>
          <td>分屏显示文件内容</td>
        </tr>
        <tr>
          <td>03</td>
          <td>grep 搜索文本 文件名</td>
          <td>grep</td>
          <td>搜索文本文件内容</td>
        </tr>
      </tbody>
    </table>
    <h3 id="toc_23">
      5.1
      <code>cat</code>
    </h3>
    <ul>
      <li>
        <code>cat</code> 命令可以用来
        <strong>查看文件内容</strong>、
        <strong>创建文件</strong>、
        <strong>文件合并</strong>、
        <strong>追加文件内容</strong> 等功能
      </li>
      <li>
        <code>cat</code> 会一次显示所有的内容，适合
        <strong>查看内容较少</strong> 的文本文件
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
          <td>-b</td>
          <td>对非空输出行编号</td>
        </tr>
        <tr>
          <td>-n</td>
          <td>对输出的所有行编号</td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      <p>
        Linux 中还有一个
        <code>nl</code> 的命令和
        <code>cat -b</code> 的效果等价
      </p>
    </blockquote>
    <h3 id="toc_24">
      5.2
      <code>more</code>
    </h3>
    <ul>
      <li>
        <code>more</code> 命令可以用于分屏显示文件内容，每次只显示一页内容
      </li>
      <li>
        适合于
        <strong>查看内容较多</strong>的文本文件
      </li>
    </ul>
    <p>
      使用
      <code>more</code> 的操作键：
    </p>
    <table>
      <thead>
        <tr>
          <th>操作键</th>
          <th>功能</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>空格键</td>
          <td>显示手册页的下一屏</td>
        </tr>
        <tr>
          <td>Enter 键</td>
          <td>一次滚动手册页的一行</td>
        </tr>
        <tr>
          <td>b</td>
          <td>回滚一屏</td>
        </tr>
        <tr>
          <td>f</td>
          <td>前滚一屏</td>
        </tr>
        <tr>
          <td>q</td>
          <td>退出</td>
        </tr>
        <tr>
          <td>/word</td>
          <td>
            搜索
            <strong>word</strong> 字符串
          </td>
        </tr>
      </tbody>
    </table>

    <h3 id="toc_25">
      5.3
      <code>grep</code>
    </h3>
    <ul>
      <li>
        Linux 系统中
        <code>grep</code> 命令是一种强大的文本搜索工具
      </li>
      <li>
        <code>grep</code>允许对文本文件进行
        <strong>模式</strong>查找，所谓模式查找，又被称为正则表达式，在就业班会详细讲解
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
          <td>-n</td>
          <td>显示匹配行及行号</td>
        </tr>
        <tr>
          <td>-v</td>
          <td>显示不包含匹配文本的所有行（相当于求反）</td>
        </tr>
        <tr>
          <td>-i</td>
          <td>忽略大小写</td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li>常用的两种模式查找</li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>含义</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>^a</td>
          <td>
            行首，搜寻以
            <strong>a</strong> 开头的行
          </td>
        </tr>
        <tr>
          <td>ke$</td>
          <td>
            行尾，搜寻以
            <strong>ke</strong> 结束的行
          </td>
        </tr>
      </tbody>
    </table>
    <h2 id="toc_26">06. 其他</h2>
    <h3 id="toc_27">
      6.1
      <code>echo 文字内容</code>
    </h3>
    <ul>
      <li>
        <code>echo</code> 会在终端中显示参数指定的文字，通常会和
        <strong>重定向</strong> 联合使用
      </li>
    </ul>
    <h3 id="toc_28">
      6.2 重定向
      <code>&gt;</code> 和
      <code>&gt;&gt;</code>
    </h3>
    <ul>
      <li>
        Linux 允许将命令执行结果
        <strong>重定向</strong>到一个
        <strong>文件</strong>
      </li>
      <li>
        将本应显示在
        <strong>终端上的内容</strong>
        <strong>输出／追加</strong> 到
        <strong>指定文件中</strong>
      </li>
    </ul>
    <p>其中</p>
    <ul>
      <li>
        <code>&gt;</code> 表示输出，会覆盖文件原有的内容
      </li>
      <li>
        <code>&gt;&gt;</code> 表示追加，会将内容追加到已有文件的末尾
      </li>
    </ul>
    <h3 id="toc_29">
      6.3 管道
      <code>|</code>
    </h3>
    <ul>
      <li>
        Linux 允许将
        <strong>一个命令的输出</strong> 可以
        <strong>通过管道</strong> 做为
        <strong>另一个命令的输入</strong>
      </li>
      <li>
        可以理解现实生活中的管子，管子的一头塞东西进去，另一头取出来，这里
        <code>|</code> 的左右分为两端，左端塞东西（写），右端取东西（读）
      </li>
    </ul>
    <p>常用的管道命令有：</p>
    <ul>
      <li>
        <code>more</code>：分屏显示内容
      </li>
      <li>
        <code>grep</code>：在命令执行结果的基础上查询指定的文本
      </li>
    </ul>
  </div>
</template>