---
title: LeagueTavern帮助手册
---
# LeagueTavern
尊敬的召唤师，欢迎使用 <a-button type="primary">LeagueTavern</a-button> ！

## 🔝介绍
`LeagueTavern`是由[Butter_Cookies](https://space.bilibili.com/248303677)、[KBD](https://space.bilibili.com/3072795)、[Mario](https://space.bilibili.com/14671179)开发的英雄联盟助手，提供对位胜率、一键应用符文、出装等功能，所有操作均使用[拳头官方公开Api](https://developer.riotgames.com)，不修改任何客户端数据，完全遵守《英雄联盟用户协议》。

::: warning ⚠注意
为了正常与LCU客户端通讯，`LeagueTavern`会申请管理员权限运行。
:::

## 💰赞助
本软件暂不开源但所有功能完全免费，服务器费用均由作者自行承担，您可以在 [<a-button type="primary">爱发电</a-button>](https://afdian.net/@LeagueTavern)平台为我们捐赠，可获得未来`LeagueTavern`的优先内测权，您的每一笔赞助都会使`LeagueTavern`变得更好！

---

## 📶数据来源
英雄排名及对位数据来自:
- [OP.GG](https://op.gg)

符文及出装数据来自：
- [OP.GG](https://op.gg)
- [LOL.QQ.COM](https://lol.qq.com)
- [EuropeanBuilds](https://europeanbuilds.net)
- [MurderBridge](https://www.murderbridge.com)

---

## ▶️开始使用

### 安装
从群内下载`LeagueTavern`安装包，双击运行`LeagueTavern Setup 1.0.6.exe`将会自动安装，片刻之后即可完成安装，安装完成后会自动启动 LeagueTavern 并在开始菜单跟桌面创建快捷方式。

### 运行
双击桌面的 <a-button type="primary">LeagueTavern</a-button> 图标即可启动，当你**运行游戏**后`LeagueTavern`将会自动识别当前区服所登录的召唤师角色
>`LeagueTavern`与`英雄联盟`游戏没有严格的启动顺序，无论哪个先启动都不会影响使用

![客户端登陆](https://z3.ax1x.com/2021/05/20/gT7cPU.md.jpg)

::: warning ⚠注意
**手动添加**功能暂不可用，点击不会有任何反应，请自行启动游戏`LeagueTavern`会自动查找召唤师。
:::

点击当前召唤师后`LeagueTavern`会进入后台运行，此时只需要进入英雄选择时就可以开始使用啦！

![英雄选择](https://z3.ax1x.com/2021/05/20/gT7qRe.jpg)

---

## ♾️功能介绍

### ☑️英雄梯队
![英雄选择页](https://z3.ax1x.com/2021/05/20/gT4mdS.png)

> 英雄梯队会展现当前版本下各个分路的英雄梯队数据

::: tip ✅小提示
右上角可切换分路

此窗口上鼠标指向该英雄可快速选择英雄。
:::

### ☑️英雄禁用排行
![ban](https://z3.ax1x.com/2021/05/20/gT4Vqf.png)

> 英雄梯队会展现当前版本各个分路的英雄禁用数据

::: tip ✅小提示
右上角可切换分路

此窗口上鼠标指向该英雄可快速禁用英雄。
:::

### ☑️英雄对线 counter 率表现
![对线](https://z3.ax1x.com/2021/05/20/gT4EsP.png)


>`LeagueTavern`会自动选择为你选择所对位的英雄，也可自己选择与你对位的英雄来查询两者的 counter 率

::: tip ✅小提示
如与队友交换了分路可以在右上角更改自身分路

可以点击查看敌方团队任意一名英雄的数据来帮助队友选择合适的英雄取得优势
:::

### ☑️英雄技能与召唤师技能
![主界面](https://z3.ax1x.com/2021/05/20/gT4nIg.png)

> 英雄详情页会展现当前版本该英雄常用的技能加点以及召唤师技能

::: tip ✅小提示
右上角可切换分路

召唤师技能可以点击应用
:::

### ☑️英雄符文选择页
![符文](https://z3.ax1x.com/2021/05/20/gT4eZ8.png)

> 符文页会展现当前版本该英雄所有常用位置的符文，可以点击应用

::: tip ✅小提示
右上角可切换多个数据来源
:::

### ☑️英雄出装选择页
![出装](https://z3.ax1x.com/2021/05/20/gT4KiQ.png)

> 出装页会展现当前版本该英雄所有常用位置的出装，可以点击应用

::: tip ✅小提示
右上角可切换多个数据来源
:::

### ⭕英雄走势
计划在 `LeagueTavern Alpha 4.0` 中实现

### ⭕队友数据查询
计划在 `LeagueTavern Alpha 4.0` 中实现
> 国服战绩Api不稳定，此功能效果不会太理想。

### ⭕队友战绩查询
计划在 `LeagueTavern Alpha 4.0` 中实现
> 国服战绩Api不稳定，此功能效果不会太理想。

---

## ➕其他说明

### 排位模式
>`LeagueTavern` 在排位模式中会根据你分配到的位置提供梯队禁用对位数据，如果你与其他召唤师达成一致意见交换位置可以在右上角切换分路位置。

### 匹配模式（召唤师峡谷）
>`LeagueTavern` 将会默认选择 OP.GG 中该英雄出现率最高的分路来推荐符文装备

### 极地大乱斗
>`LeagueTavern` 的符文和装备数据将会默认使用 [MurderBrige](https://www.murderbridge.com) 推荐，该网站具有更专业的ARAM数据统计


### 分路选择
>切换位置中若有位置无法选择，则说明该英雄在此分路无数据

![](https://z3.ax1x.com/2021/05/20/gT4MGj.png)
![](https://z3.ax1x.com/2021/05/20/gT4QRs.png)

::: tip 😎
那你可能要创造一个新的玩法了，召唤师
:::

---

## ❓常见问题

### `LeagueTavern`打不开
>如果你无论怎么安装，从桌面或开始菜单启动`LeagueTavern`都没有任何反应无任何界面弹出，那么你可能遇到了`系统兼容性`问题，该问题目前已知但无法解决，**非常抱歉**！我们将在`LeagueTavern Alpha 4.0`中尝试解决

### 选择召唤师后无限转圈
>你依然遇到了`系统兼容性`问题，该问题多数因为你使用的是精简/优化版系统，导致重要服务被禁用，请在群内询问管理员帮助排查此问题

### 新英雄没有出装数据
>各大数据网站在新英雄上线正式服后需要足够多的场次来统计数据，`LeagueTavern 服务端`会保持每天爬取最新数据，请耐心等待更新

---

## ⚠️免责声明
::: danger
凡本软件提供的所有资源的版权，均归其版权所有人所有。用户若因本软件导致的任何法律争议及后果，均由用户自己负责，本软件不负任何责任。使用此软件即代表用户已知晓以上内容。
:::
