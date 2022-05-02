---
date: "2022/04/21"
tag: [博客,图床,jsdelivr,Github]
categories: [科技积累]
sticky: flase
coverUrl: "https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204301218109.png" 
---



# 使用Picgo+Github+jsdelivr 搭建一个免费图床

jsDelivr提供GitHub，npm，WordPress等项目的镜像，且有国内节点，访问速度很不错，这也是我们选择它的原因。jsDelivr 的优点在于其专注于性能，可靠性和安全性，并且每个人均可免费使用，没有带宽限制。



偶然的一次机会，我接触到了 **`Markdown`** 语法，随后便喜欢上了这种标记语言。

目前，我使用 **`Typora`** 编辑器。

![img](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281251935.png)

**Typora** 里面有个非常好用的功能，就是通过 **Picgo** 将图片上传到图床。

下面就讲一下如何搭建一个免费的图床。

# Picgo 介绍

Picgo 是一款开源的图片上传工具，项目地址:[Picgo](https://github.com/Molunerfinn/PicGo)

Picgo 支持`七牛图床`,`腾讯云`, `又拍云`,`Github` 等。

在众多的图床中我选择`Github` , 因为他免费.

# 搭建图床

## 1. 注册 / 登录 Github

这个就不演示了

## 2. 创建 Repo

 ![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281251905.png)

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281251098.png)

然后点击 **`Create Repository`** 就可以了

## 3. 生成 Taken

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281251228.png)

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281252034.png)

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281252371.png)

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281252102.png)

创建之后，会生成一串 token

## 4. 配置 Picgo

`Picgo `请到 [Picgo](https://github.com/Molunerfinn/PicGo) 下载

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204281252539.png)

- 设定仓库名的时候，是按照 “账户名 / 仓库名的格式填写”
- 分支名统一填写 “master”
- 将之前的 Token 黏贴在这里
- 存储的路径可以按照我这样子写，就会在 repository 下创建一个 “img” 文件夹
- 自定义域名的作用是，在上传图片后成功后，PicGo 会将 “自定义域名 + 上传的图片名” 生成的访问链接，放到剪切板上
- `https://raw.githubusercontent.com/用户名/RepositoryName/分支名`，自定义域名需要按照这样去填写
- 但是由于 Github 在国内的访问速度太慢，所以我们使用 [jsdelivr](https://www.jsdelivr.com/) 加速，只需要把自定义域名修改一下就可以了:`https://cdn.jsdelivr.net/gh/`用户名/RepositoryName

## 总结

将上面的步骤设置好之后，就可以愉快地写 Markdown 了。上传图片有快捷键，默认的是 `Ctrl+Shift+P`, 可以将剪切板上的图片快捷上传。
