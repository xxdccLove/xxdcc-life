---
date: "2022/04/06"
tag: [Gravatar,博客]
categories: [科技积累]
sticky: flase
coverUrl: "https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261933218.png" 
title: Typecho拒绝使用Gravatar头像
---

博客默认的Gravatar太煞风景？那就换了它！

# 前言

相信大部分做过网站的朋友都知道，`Gravatar`是一个全球性的头像设置平台 除中国以外大部分网站都是调用的此平台头像，所以用这个头像平台的用户很少，导致大部分使用此头像平台的网站评论区总会有很多`Gravatar`的官方默认头像。看起来恶心至极

------

# 定位文件

**↓找到主题下的comments.php文件，查找关键字gravatar↓**

**↓我们会发现下面一段语句↓**

```javascript
<?php $comments->gravatar('40', ''); ?>
```

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204216.png)

![](https://img.xxdcc.life/i/2022/04/06/624d7b3747c6e.png)

**↓果断删掉↓**

**↓改成如下代码↓**

```javascript
<span itemprop="image">
<?php $number=$comments->mail; echo '<img src="https://q2.qlogo.cn/headimg_dl? bs='.$number.'&dst_uin='.$number.'&dst_uin='.$number.'&;dst_uin='.$number.'&spec=100&url_enc=0&referer=bu_interface&term_type=PC" width="46px" height="46px" style="border-radius: 50%;float: left;margin-top: 0px;margin-right: 10px;margin-bottom:-2px">'; ?>
</span>
```

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261935999123.png)

# 总结

**即用第二条语句把原来的替换掉即可**

# 效果

![](https://cdn.jsdelivr.net/gh/xxdccLove/xxdccPic/img/202204261936563.png)

# 更新

在通常情况下，当用户输入了`QQ`邮箱，我们的头像才会调用为`QQ`头像。但是假如用户使用的是`163`邮箱或者是`其它`邮箱，那么头像肯定会显示失败。那么该怎样解决这个问题呢？其实也很简单，我们放个`if`判断语句就行了。先判断输入的邮箱是不是`QQ`邮箱，如果是调用`QQ`邮箱，如果不是则调用`Gravatar`头像或者其他的静态头像,或者随机头像即可。

# 更新代码

**代码如下**

```javascript
<span itemprop="image">
<?php $number=$comments->mail;
if(preg_match('|^[1-9]\d{4,11}@qq\.com$|i',$number)){
echo '<img src="https://q2.qlogo.cn/headimg_dl? bs='.$number.'&dst_uin='.$number.'&dst_uin='.$number.'&;dst_uin='.$number.'&spec=100&url_enc=0&referer=bu_interface&term_type=PC" width="46px" height="46px" style="border-radius: 50%;float: left;margin-top: 0px;margin-right: 10px;margin-bottom:-2px">'; 
}
else
{
echo '<img src="https://bing.ioliu.cn/v1/rand?w=1920&h=1080" width="46px" height="46px" style="border-radius: 50%;float: left;margin-top: 0px;margin-right: 10px;margin-bottom:-2px">';
}
?>
</span>
```

# 整理的随机图片API接口

> **速度:** ★★★★★ 
>
> **功能:** 返回Bing的随机图片 
>
> **地址:** https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture 
>
> ---
>
> **速度:** ★★★★☆ 
>
> **功能:** 来自github的项目https://github.com/xCss/bing 
>
> **地址:** https://bing.ioliu.cn/v1/rand (返回随机图片) https://bing.ioliu.cn/v1/rand?w=1920&h=1080 (指定大小)