title: 优雅地打开软件是怎样的体验？
tag: 效率
---
## 0. 问题的由来

不知道大家平时是怎么打开常用软件的：

* windows 用户：
    1. 从桌面上一堆杂乱的文件中找到快捷方式双击打开？
    2. 从桌面上分类整理好的文件夹中找到快捷方式双击打开？
    3. 同样利用 [Fences](http://www.stardock.com/products/fences/) 从桌面选择？
    4. 利用 [Everything](http://www.voidtools.com/) 进行文件名搜索？
    5. win8下，win10下 blablabla...

<!-- more -->

* OS X 用户：
    1. 通过在 Dock 中寻找后，单击打开？
    2. 通过拇指与其他三个手指合拢进入 Launchpad 后，单击打开？
    3. 利用自带的 spotlight 或者 [alfred](https://www.alfredapp.com/) 等工具输入软件名打开？
    4. 通过终端...

* linux 用户：
    1. 通过终端...
    2. 要啥自行车...╮(╯▽╰)╭... ~~(才不会告诉你是因为我不造呢...)~~

---

## 1. 我的选择～=￣ω￣=～ ~~(私のchoice)~~

* OS X 下：
    * 通过 alfred 打开。 (btw 可以将 Application 中的各个 app 的名字重新缩写过，比如将 `网易云音乐` 缩写成 `wyy`)

* windows 下：
    1. 通过自带的运行打开。
    > (就是 `win + r` 那个→_→，不过为了保持与 OS X 操作的一致性利用了 [AutoHotkey](http://www.autohotkey.com/) 将其修改为 `ctrl + space`。配置文件是 [点我](https://github.com/BuptStEve/useful-settings) 中的 steve.ahk )

        那么接着问题来了，打开运行后应该输入啥？

        > 还需要2步设置：(居然比把大象放冰箱还少一步啊喂！)

        1. 将 (桌面上或者其他地方的) 软件快捷方式改名缩写成2~3个字母
        2. 把该快捷方式 duang～ 地一声剪切到 `C:\Windows` 下，搞定收工～=￣ω￣=～

    2. 不过有的软件比如 `Github.appref-ms` 这种格式的就没办法通过以上方法快速打开了。这时候就要推荐一个好用软件啦：[Rolan](http://www.irolan.com/)，将快捷方式或其他的文件/文件夹拖进去就ok。要使用的时候就通过快捷键呼叫出 Rolan 后即可打开。

---

## 2. 综上

无论何时，无论当前层叠了多少窗口...只需要:

1. 按下 `Ctrl + Space`
2. 输入缩写过的 2~3 个软件名称
3. 按下 `Enter` 确认

Duang～一下就优雅地把软件打开了~\\(≧▽≦)/~
