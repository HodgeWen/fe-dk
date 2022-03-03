---
title: 开放授权OAuth2.0
---

# 开放授权 OAuth2.0
开放授权指授权第三方访问我们的资源. 比如使用微信登录, 可以获得微信用户的昵称和手机号码.

了解oauth之前我们先了解什么叫做授权.

授权通常是指两个角色之间的权力委托关系, 更具体的就是有权一方将权力授予无权一方.

比如下面几种典型的授权:
- 租赁关系
- 借贷关系
- 网站登录鉴权

开放授权和授权不同的地方在于, 发生主体不止两个, 除了授权(用户)和被授权(第三方用户)的两个角色主体外, 还有个存储你资源的角色主体.
正是因为你的资源并没有在你身边, 你无法直接把你的资源给到资源储存主体, 你需要通知资源储存主体授权, 这一过程就叫开放授权.

## 角色
OAuth的流程中，主要有如下四个角色:

- 资源拥有者(用户)
- 资源服务器(资源保存的地方)
- 授权服务器(帮忙生成令牌进行授权的地方, 和资源服务器同属一个主体)
- 想要访问用户的客户端(第三方应用或者网站)

## 第三方网站使用微信登录的OAuth2流程

用户点击使用微信登录 -> 跳出微信扫码页面(或者手机上直接跳转到微信登录确认页) -> 获得授权(token之类的令牌, 通过这个令牌访问资源)并回到第三方网站

## 令牌
令牌是访问用户资源的一个通行证, 由授权服务器授权后获得, 令牌的效果是有限的, 包括过期时间, 有限的访问权限(比如微信只能访问昵称和手机, 不能够访问通讯录, 聊天记录等等).

从第三方应用的视角来讲, 授权的过程等同于账号密码登录的过程, 在大多数web应用中都是基于token和session来进行权限校验的, 也有过期时间, 也有权限范围, 不同的只是一个是从自家服务器上拿到的,
一个是从别人那边拿到的.