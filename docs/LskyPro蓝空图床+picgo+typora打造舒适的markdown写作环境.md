---
date: "2022/04/01"
tag: [博客,图床,美化]
categories: [科技积累]
sticky: flase
coverUrl: "https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/20220426193796321.png" 
---

# LskyPro蓝空图床+picgo+typora打造舒适的markdown写作环境

# 一、配置兰空图床

## 1.安装LskyPro V2

**1、源码下载**

[Github项目地址](https://github.com/lsky-org/lsky-pro/releases)

> 上次更新2022-04-01

[蓝奏云](https://wwd.lanzouq.com/i4QP602ppx9a)

**2、前往宝塔面板创建网站和数据库**

要求：PHP >= 8.0.2 ; MySQL 5.7+

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261938571w1.png)

**3、开始安装**

+ 将安装包上传至站点目录然后解压，剪切文件到根目录，并删除源码压缩包以及空文件夹或者直接将解压后的所有文件上传至服务器网站根目录

+ 将站点的运行目录指向程序的 `public` 文件夹

  ![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/412204261938386.png)

+ nginx 需要设置伪静态，内容如下

  ```text
  location / {
    try_files $uri $uri/ /index.php?$query_string;
  }
  ```

+ 将程序所在目录的所有文件夹、子文件夹、文件的权限，用户组和所有者改为 `www`，权限改为 `0755`

  > 通常情况下，Web 站点目录的所有者和用户组为 `www:www`。若未正确设置权限，在后续的使用过程中可能会因为权限导致文件无法读取、无法写入、创建文件夹等一系列问题

+ 配置网站SSL证书

**4、核查安装要求**

如图所示：

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261938694.png)

在宝塔面板的`软件商店-已安装-兰空图床所用PHP-设置中`，在安装拓展处**安装**所需拓展，在禁用函数处**将所需启用函数删除**

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261939233.png)

## **2.配置数据库**

+ 访问网站，开始进行安装
+ 配置数据库，对应数据库用户名以及密码等可以在宝塔-数据库页面查看
+ 设置管理员账号
+ 登录管理员账号

# **二、配置picgo**

## **1、下载picgo**

**项目地址为：**[**Github**](https://github.com/Molunerfinn/PicGo/releases)

**也可使用备用链接（不保证为最新版本）：**[**蓝奏云**](https://wwe.lanzouq.com/ixv5Sznxbwj)

一般来说选择图中版本即可

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261939491.png)

## **2、安装蓝空图床插件**

搜索**lankong**，可直接在线安装图中插件

也可[下载安装包](https://github.com/hellodk34/picgo-plugin-lankong)进行离线安装

> 克隆该项目，解压缩到路径 `/path/to/picgo-plugin-lankong`
>
> 进入以下目录
>
> ```
> 
> Windows: %APPDATA%\picgo\
> 
> Linux: $XDG_CONFIG_HOME/picgo/ or ~/.config/picgo/
> 
> macOS: ~/Library/Application\ Support/picgo/
> ```
>
> 在对应系统的 PicGo 程序配置文件路径下执行 `npm install /path/to/picgo-plugin-lankong`，然后重启应用即可。

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261940333.png)

## **3、配置插件**

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261940070.png)

参数说明

+ `Lsky Pro Version`，在下拉菜单中选择 Lsky Pro 版本，`V1` 还是 `V2`，默认 `V1`

+ 填写图床的 `server url`，注意不要以 `/` 结束，比如 `https://example.com` 就是没问题的

+ 填写 `token`

+ `Strategy ID`，存储策略 ID，如果是 V1 或 V2 使用默认存储策略的用户，请留空；除非你知道具体 ID，否则请留空

+ `Sync Delete` 同步删除选项，只支持 `V2`，默认关闭，开启后在 PicGo 相册中删除图片可同步删除图床上的文件

+ `Ignore certificate error` 开关请见下面说明

  > 由于有些站点使用 Let's Encrypt 颁发的免费证书，有效期只有 90 天，在测试上传中可能遇到 `certificate has expired` 错误，请打开开关 `Ignore certificate error` 即可成功上传

## 4、关于Lsky Pro获取token的补充说明

### V1

兰空图床 V1 token 的获取方式很简单，注册后进入个人设置页面就能看到，复制后使用即可

### V2

**兰空图床 V2 token 的获取方式：**

+ 登录到一个 V2 版本的兰空图床，比如 https://img.xxdcc.life 进入 API 接口页面 https://img.xxdcc.life/api 查看获取一个 token 的方式

+ 使用 postman 之类的 api 调试工具发起一个 http post 请求即可生成一个 token，请求时的细节如下

  1. 请求 url: `https://img.xxdcc.life/api/v1/tokens`

  2. 请求方法: POST

  3. 设置请求头 `Accept` 的值为 `application/json`

     ![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261940897.png)

  4. 请求体中使用 json 语法填入邮箱和密码

     ```
     {
     
     "email": "your_username@example.com",
     
     "password":"your_password"
     
     }
     ```

     ![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261940795.png)

  5. 请求成功后得到返回信息中的 `token`，使用 `Bearer` 拼接拿到的 token 作为 `Auth token` 填入 PicGo 设置中。注意 Bearer 和 返回的 token 之间有个空格，请严格按照格式填写，程序不会校验这个细节

     即 `Auth token` 为 `Bearer yourtoken`

# **三、配置Typora**

这个时候v1.0版本开始收费，但仍提供免费的旧版下载链接：[官方旧版下载链接](https://typora.io/windows/dev_release.html)

也可将[蓝奏云](https://wwe.lanzouq.com/iy4DWznwvxe)中的文件解压复制到 `resources` 文件夹内实现破解目的

- 打开偏好设置，配置图片上传

  ![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261941990.png)

# **四、其它**

## 1、升级

### 在线升级

兰空图床支持从 web 端直接升级版本，但不会提醒有新版本发布，如果你希望在新版本发布时得到通知，可以前往 https://github.com/lsky-org/lsky-pro，然后点击右上角的 `Watch` 展开后选择 `Custom`，勾选 `Releases` 然后点击 `Apply` 即可。

新版本发布以后，等待大约三分钟后可以打开兰空图床系统设置，滚动至最底部，会出现新版本的升级信息。

### 手动升级

如果在线升级失败，可以尝试手动升级。首先你需要前往 https://github.com/lsky-org/lsky-pro/releases 找到最新的版本，下载完整的安装包。(如果你不是开发人员，请**不要**下载名为 `Source code` 的压缩包，此为未安装依赖的源码包)

然后按照以下步骤进行升级：

1. 备份 `storage` 和 `public` 目录下的缩略图文件夹(默认该文件夹名称为 `thumbnails`)
2. 删除 **除了** 目录 `.env` 文件和 `installed.lock` 文件以外的所有文件夹以及文件
3. 解压新版本到程序根目录(替换掉旧版本)
4. 将备份的 `storage` 文件夹替换掉**已解压**的 `storage` 文件夹，将备份的缩略图文件夹放到 `public` 目录下
5. 修改版本号，进入数据库找到 `configs` 表，修改 `name` 为 `app_version` 的 `value` 值，例如 `V 2.0`，字符串必须完全一致。
6. 进入程序跟目录执行依次执行一下命令(需要PHP 8+) 
   - `php artisan route:clear`
   - `php artisan cache:clear`
   - `php artisan view:clear`
   - `php artisan clear`

本地储存以及使用 sqlite 需要注意的事情

- 使用 sqlite 默认情况下会将数据库文件放置 `database` 文件夹下，请在升级之前备份该数据库文件，并在上述第三步操作以后将数据库文件放置原位。
- 本地储存策略的所有上传的图片都会保存在 `storage` 文件夹下，数据无价，请注意备份该文件夹。
- 本地储存策略会在 `public` 文件夹下生成符号连接(软连接)，删除 `public` 目录后，请在升级完成以后编辑本地储存策略，保存一下以重新生成符号连接。

## 2、迁移

迁移与手动升级的步骤大致相同。这里只表述需要注意的事项以及站点文件复制到另一个环境以后的操作。

- 请保证新的环境满足兰空图床的运行要求，例如是否安装了 `fileinfo`、`imagick` 拓展，是否启用了必要的函数等等。
- 打包时请注意程序中 `.` 符号开头的文件，这些可能在某些文件管理程序中被隐藏，请不要忽略了这些文件。
- 如果你使用的是本地储存，请删除 `public` 目录下的所有符号连接，然后进入后台编辑本地策略，保存一下以重新生成符号连接。
- 迁移完成以后请将跟目录所有文件夹、子文件夹、文件的权限改为 0755，所有组/权限组改为 www:www

## 3、相关网址

+ [兰空图床官网](https://docs.lsky.pro/)
+ [写了一个适配兰空图床 Lsky Pro 的 PicGo 图片上传插件](https://hellodk.cn/post/964)——lankong插件作者博客