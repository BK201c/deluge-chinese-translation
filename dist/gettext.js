## -*- coding: utf-8 -*-
/*
 * Script: gettext.js
 *  A script file that is run through the template renderer in order for
 *  translated strings to be used.
 *
 * Copyright:
 *  (c) 2009 Damien Churchill <damoxc@gmail.com>
 */

GetText = {
    maps: {},
    add: function(string, translation) {
        this.maps[string] = translation;
    },
    get: function(string) {
        if (this.maps[string]) {
            return this.maps[string];
        } else {
            return string;
        }
    }
}

function _(string) {
    return GetText.get(string);
}

// TorrentGrid.js:105
GetText.add('#', '${escape(_("#"))}')

// DetailsTab.js:50
GetText.add('# of files', '${escape(_("文件数量"))}')

// Menus.js:161
GetText.add('0', '${escape(_("0"))}')

// Menus.js:163
GetText.add('1', '${escape(_("1"))}')

// Menus.js:109, Menus.js:127
GetText.add('10 KiB/s', '${escape(_("10 KB/s"))}')

// Menus.js:145
GetText.add('100', '${escape(_("100"))}')

// Menus.js:165
GetText.add('2', '${escape(_("2"))}')

// Menus.js:147
GetText.add('200', '${escape(_("200"))}')

// Menus.js:167
GetText.add('3', '${escape(_("3"))}')

// Menus.js:111, Menus.js:129
GetText.add('30 KiB/s', '${escape(_("30 KB/s"))}')

// Menus.js:149
GetText.add('300', '${escape(_("300"))}')

// Menus.js:115, Menus.js:133
GetText.add('300 KiB/s', '${escape(_("300 KB/s"))}')

// Menus.js:169
GetText.add('5', '${escape(_("5"))}')

// Menus.js:107, Menus.js:125
GetText.add('5 KiB/s', '${escape(_("5 KB/s"))}')

// Menus.js:143
GetText.add('50', '${escape(_("50"))}')

// Menus.js:151
GetText.add('500', '${escape(_("500"))}')

// Menus.js:113, Menus.js:131
GetText.add('80 KiB/s', '${escape(_("80 KB/s"))}')

// QueuePage.js:69
GetText.add('Active Torrents', '${escape(_("队列设置"))}')

// EditTrackersWindow.js:112, ConnectionManager.js:100, AddConnectionWindow.js:56, Toolbar.js:58, AddTrackerWindow.js:57, UrlWindow.js:50, FileWindow.js:53, AddWindow.js:52
GetText.add('Add', '${escape(_("添加"))}')

// AddConnectionWindow.js:40
GetText.add('Add Connection', '${escape(_("添加连接"))}')

// OptionsTab.js:147
GetText.add('Add In Paused State', '${escape(_("添加后暂停任务"))}')

// AddWindow.js:37
GetText.add('Add Torrents', '${escape(_("添加种子"))}')

// AddTrackerWindow.js:40
GetText.add('Add Tracker', '${escape(_("添加Tracker"))}')

// FileWindow.js:40
GetText.add('Add from File', '${escape(_("上传种子"))}')

// UrlWindow.js:36
GetText.add('Add from Url', '${escape(_("从Url添加"))}')

// DownloadsPage.js:146
GetText.add('Add torrents in Paused state', '${escape(_("添加后暂停任务"))}')

// TorrentGrid.js:176
GetText.add('Added', '${escape(_("添加时间"))}')

// FilterPanel.js:124
GetText.add('All', '${escape(_("全部"))}')
GetText.add('Downloading', '${escape(_("下载中"))}')
GetText.add('Active', '${escape(_("运行中"))}')
GetText.add('Paused', '${escape(_("暂停"))}')
GetText.add('Queued', '${escape(_("队列"))}')
GetText.add('Checking', '${escape(_("检查"))}')

// OptionsTab.js:77, DownloadsPage.js:100
GetText.add('Allocation', '${escape(_("磁盘分配"))}')

// DaemonPage.js:77
GetText.add('Allow Remote Connections', '${escape(_("允许远程连接"))}')

// InterfacePage.js:78
GetText.add('Allow the use of multiple filters at once', '${escape(_("一次允许使用多个过滤器"))}')

// OptionsTab.js:347, PreferencesWindow.js:107
GetText.add('Apply', '${escape(_("应用"))}')

// Menus.js:176, OptionsTab.js:215
GetText.add('Auto Managed', '${escape(_("自动管理队列"))}')

// DownloadsPage.js:91
GetText.add('Autoadd .torrent files from', '${escape(_("种子自动添加目录"))}')

// TorrentGrid.js:169
GetText.add('Avail', '${escape(_("可用性"))}')

// FileBrowser.js:47
GetText.add('Back', '${escape(_("返回"))}')

// OptionsTab.js:88, OptionsTab.js:107, BandwidthPage.js:42
GetText.add('Bandwidth', '${escape(_("带宽"))}')

// OtherPage.js:66
GetText.add('Be alerted about new releases', '${escape(_("接收新版本通知"))}')

// Menus.js:204
GetText.add('Bottom', '${escape(_("置底"))}')

// MoveStorage.js:73, FileWindow.js:70, InstallPluginWindow.js:69
GetText.add('Browse', '${escape(_("浏览"))}')

// CachePage.js:41
GetText.add('Cache', '${escape(_("缓存"))}')

// CachePage.js:69
GetText.add('Cache Expiry (seconds)', '${escape(_("缓存写入间隔（秒)"))}')

// CachePage.js:63
GetText.add('Cache Size (16 KiB Blocks)', '${escape(_("缓存大小（16 KB 块)"))}')

// EditTrackersWindow.js:56, OtherLimitWindow.js:72, RemoveWindow.js:55, MoveStorage.js:55, EditTrackerWindow.js:56, AddTrackerWindow.js:56, AddWindow.js:51
GetText.add('Cancel', '${escape(_("取消"))}')

// PreferencesWindow.js:85
GetText.add('Categories', '${escape(_("设置项"))}')

// InterfacePage.js:173
GetText.add('Certificate', '${escape(_("证书"))}')

// InterfacePage.js:117
GetText.add('Change', '${escape(_("更改"))}')

// InterfacePage.js:224
GetText.add('Change Successful', '${escape(_("更改成功"))}')

// ConnectionManager.js:54, AddConnectionWindow.js:55, PreferencesWindow.js:106
GetText.add('Close', '${escape(_("关闭"))}')

// DetailsTab.js:51
GetText.add('Comment', '${escape(_("评论"))}')

// OptionsTab.js:100
GetText.add('Compact', '${escape(_("Compact"))}')

// InterfacePage.js:105
GetText.add('Confirm Password', '${escape(_("确认密码"))}')

// ConnectionManager.js:55, ConnectionManager.js:184
GetText.add('Connect', '${escape(_("连接"))}')

// ConnectionManager.js:177, ConnectionManager.js:225
GetText.add('Connected', '${escape(_("已连接"))}')

// Menus.js:139
GetText.add('Connection Limit', '${escape(_("设置最大连接"))}')

// ConnectionManager.js:43, Toolbar.js:100
GetText.add('Connection Manager', '${escape(_("连接管理"))}')

// UI.js:151
GetText.add('Connection restored', '${escape(_("Connection restored"))}')

// Statusbar.js:57, DaemonPage.js:68
GetText.add('Connections', '${escape(_("连接数"))}')

// UrlWindow.js:68
GetText.add('Cookies', '${escape(_("Cookies"))}')

// DownloadsPage.js:83
GetText.add('Copy of .torrent files to', '${escape(_("种子文件存放至"))}')

// Toolbar.js:52
GetText.add('Create', '${escape(_("Create"))}')

// Menus.js:103
GetText.add('D/L Speed Limit', '${escape(_("设置下载限制"))}')

// NetworkPage.js:225, ProxyPage.js:69
GetText.add('DHT', '${escape(_("DHT"))}')

// Statusbar.js:210
GetText.add('DHT Nodes', '${escape(_("DHT 网络"))}')

// DaemonPage.js:41
GetText.add('Daemon', '${escape(_("进程"))}')

// DaemonPage.js:57
GetText.add('Daemon port', '${escape(_("进程端口"))}')

// Toolbar.js:45
GetText.add('Deluge', '${escape(_("Deluge"))}')

// DetailsTab.js:36
GetText.add('Details', '${escape(_("详情"))}')

// EncryptionPage.js:65, EncryptionPage.js:82
GetText.add('Disabled', '${escape(_("禁用"))}')

// ConnectionManager.js:179
GetText.add('Disconnect', '${escape(_("断开"))}')

// Menus.js:251, Deluge.js:156
GetText.add('Do Not Download', '${escape(_("Do Not Download"))}')

// QueuePage.js:107
GetText.add('Do not count slow torrents', '${escape(_("不计算速度极低的任务"))}')

// EditTrackersWindow.js:107, Menus.js:198, Toolbar.js:89
GetText.add('Down', '${escape(_("下移队列"))}')

// TorrentGrid.js:211
GetText.add('Down Limit', '${escape(_("下载限速"))}')

// TorrentGrid.js:130
GetText.add('Down Speed', '${escape(_("下载速度"))}')

// FilesTab.js:63
GetText.add('Download', '${escape(_("下载"))}')

// OptionsTab.js:55
GetText.add('Download Location', '${escape(_("文件位置"))}')

// Statusbar.js:104
GetText.add('Download Speed', '${escape(_("下载速度"))}')

// DownloadsPage.js:69
GetText.add('Download to', '${escape(_("默认下载目录"))}')

// TorrentGrid.js:197
GetText.add('Downloaded', '${escape(_("已下载"))}')

// DownloadsPage.js:42
GetText.add('Downloads', '${escape(_("下载"))}')

// TorrentGrid.js:142
GetText.add('ETA', '${escape(_("剩余时间"))}')

// EditTrackersWindow.js:117
GetText.add('Edit', '${escape(_("编辑"))}')

// EditTrackerWindow.js:40
GetText.add('Edit Tracker', '${escape(_("编辑 Tracker"))}')

// EditTrackersWindow.js:40, Menus.js:218, OptionsTab.js:332
GetText.add('Edit Trackers', '${escape(_("编辑 Trackers"))}')

// EncryptionPage.js:99
GetText.add('Either', '${escape(_("全部"))}')

// EncryptionPage.js:64, EncryptionPage.js:81, PluginsPage.js:81
GetText.add('Enabled', '${escape(_("启用"))}')

// EncryptionPage.js:112
GetText.add('Encrypt entire stream', '${escape(_("加密整个流"))}')

// EncryptionPage.js:41
GetText.add('Encryption', '${escape(_("加密"))}')

// ConnectionManager.js:308, ConnectionManager.js:364, AddConnectionWindow.js:103, AddWindow.js:208
GetText.add('Error', '${escape(_("错误"))}')

// Menus.js:247
GetText.add('Expand All', '${escape(_("全部展开"))}')

// FileWindow.js:67, AddWindow.js:98
GetText.add('File', '${escape(_("文件"))}')

// FileBrowser.js:36
GetText.add('File Browser', '${escape(_("文件浏览"))}')

// OptionsPanel.js:143
GetText.add('File prioritization is unavailable when using Compact allocation. Would you like to switch to Full allocation?', '${escape(_("File prioritization is unavailable when using Compact allocation. Would you like to switch to Full allocation?"))}')

// FilesTab.js:41, FilesTab.js:50
GetText.add('Filename', '${escape(_("文件名"))}')

// FilesTab.js:35, FilesTab.js:41
GetText.add('Files', '${escape(_("文件"))}')

// Sidebar.js:55
GetText.add('Filters', '${escape(_("分类"))}')

// PluginsPage.js:118
GetText.add('Find More', '${escape(_("查找更多"))}')

// DownloadsPage.js:57
GetText.add('Folders', '${escape(_("文件夹"))}')

// Menus.js:230
GetText.add('Force Recheck', '${escape(_("强制重新检查"))}')

// EncryptionPage.js:63, EncryptionPage.js:80
GetText.add('Forced', '${escape(_("强制"))}')

// FileBrowser.js:50
GetText.add('Forward', '${escape(_("Forward"))}')

// Statusbar.js:216
GetText.add('Freespace in download location', '${escape(_("磁盘剩余空间"))}')

// OptionsTab.js:93
GetText.add('Full', '${escape(_("Full"))}')

// EncryptionPage.js:98
GetText.add('Full Stream', '${escape(_("传输"))}')

// OptionsTab.js:293, OptionsTab.js:140, QueuePage.js:52
GetText.add('General', '${escape(_("综合设置"))}')

// OtherPage.js:97
GetText.add('GeoIP Database', '${escape(_("GeoIP 数据库"))}')

// BandwidthPage.js:56
GetText.add('Global Bandwidth Usage', '${escape(_("全局带宽设置"))}')

// ProxyField.js:59
GetText.add('HTTP', '${escape(_("HTTP"))}')

// ProxyField.js:60
GetText.add('HTTP with Auth', '${escape(_("HTTP with Auth"))}')

// EncryptionPage.js:97
GetText.add('Handshake', '${escape(_("握手"))}')

// DetailsTab.js:47
GetText.add('Hash', '${escape(_("Hash"))}')

// Toolbar.js:107
GetText.add('Help', '${escape(_(" AceSheep 汉化!"))}')

// Menus.js:261, Deluge.js:158
GetText.add('High Priority', '${escape(_("High Priority"))}')

// Menus.js:266, Deluge.js:159
GetText.add('Highest Priority', '${escape(_("Highest Priority"))}')

// FileBrowser.js:56
GetText.add('Home', '${escape(_("Home"))}')

// ConnectionManager.js:74, AddConnectionWindow.js:66, ProxyField.js:71
GetText.add('Host', '${escape(_("Host"))}')

// BandwidthPage.js:122
GetText.add('Ignore limits on local network', '${escape(_("忽略本地网络的限制??"))}')

// EncryptionPage.js:57
GetText.add('Inbound', '${escape(_("入站"))}')

// NetworkPage.js:51
GetText.add('Incoming Ports', '${escape(_("入网端口"))}')

// PluginsPage.js:135
GetText.add('Info', '${escape(_("信息"))}')

// AddWindow.js:107
GetText.add('Infohash', '${escape(_("Infohash"))}')

// InstallPluginWindow.js:54, PluginsPage.js:113
GetText.add('Install', '${escape(_("安装"))}')

// InstallPluginWindow.js:40
GetText.add('Install Plugin', '${escape(_("安装插件"))}')

// InterfacePage.js:41, InterfacePage.js:53
GetText.add('Interface', '${escape(_("界面"))}')

// InterfacePage.js:199
GetText.add('Invalid Password', '${escape(_("无效密码"))}')

// OptionsTab.js:114, OptionsTab.js:141
GetText.add('KiB/s', '${escape(_("KB/s"))}')

// Statusbar.js:144, Statusbar.js:192
GetText.add('Kib/s', '${escape(_("Kb/s"))}')

// NetworkPage.js:219
GetText.add('LSD', '${escape(_("LSD"))}')

// EncryptionPage.js:91
GetText.add('Level', '${escape(_("级别"))}')

// StatusTab.js:61
GetText.add('Loading', '${escape(_("Loading"))}')

// MoveStorage.js:67, OtherPage.js:104
GetText.add('Location', '${escape(_("路径"))}')

// LoginWindow.js:45, LoginWindow.js:54
GetText.add('Login', '${escape(_("登录"))}')

// LoginWindow.js:127
GetText.add('Login Failed', '${escape(_("登录失败"))}')

// Toolbar.js:114
GetText.add('Logout', '${escape(_("退出登录"))}')

// OptionsTab.js:150, OptionsTab.js:127
GetText.add('Max Connections', '${escape(_("最大连接数"))}')

// OptionsTab.js:115
GetText.add('Max Down Speed', '${escape(_("最高下载速度"))}')

// OptionsTab.js:97
GetText.add('Max Download Speed', '${escape(_("最大下载速度"))}')

// OptionsTab.js:121
GetText.add('Max Up Speed', '${escape(_("最高上传速度"))}')

// OptionsTab.js:173, OptionsTab.js:133
GetText.add('Max Upload Slots', '${escape(_("最大上传实例"))}')

// OptionsTab.js:123
GetText.add('Max Upload Speed', '${escape(_("最大上传速度"))}')

// BandwidthPage.js:103
GetText.add('Maximum Connection Attempts per Second', '${escape(_("每秒最大连接尝试次数"))}')

// BandwidthPage.js:68, BandwidthPage.js:147
GetText.add('Maximum Connections', '${escape(_("最大连接数"))}')

// BandwidthPage.js:82, BandwidthPage.js:161
GetText.add('Maximum Download Speed (KB/s)', '${escape(_("最大下载速度 (KB/s)"))}')

// BandwidthPage.js:96
GetText.add('Maximum Half-Open Connections', '${escape(_("最大半开连接数"))}')

// BandwidthPage.js:75, BandwidthPage.js:154
GetText.add('Maximum Upload Slots', '${escape(_("最大上传实例"))}')

// BandwidthPage.js:89, BandwidthPage.js:168
GetText.add('Maximum Upload Speed (KB/s)', '${escape(_("最大上传速度 (KB/s)"))}')

// MoveStorage.js:56
GetText.add('Move', '${escape(_("移动"))}')

// OptionsTab.js:262
GetText.add('Move Completed', '${escape(_("完成后移动至"))}')

// Menus.js:236, MoveStorage.js:38
GetText.add('Move Storage', '${escape(_("移动下载位置"))}')

// DownloadsPage.js:75
GetText.add('Move completed to', '${escape(_("完成的任务 移动到"))}')

// NetworkPage.js:205
GetText.add('NAT-PMP', '${escape(_("NAT-PMP"))}')

// TorrentGrid.js:112, DetailsTab.js:46
GetText.add('Name', '${escape(_("名称"))}')

// NetworkPage.js:42
GetText.add('Network', '${escape(_("网络"))}')

// NetworkPage.js:188
GetText.add('Network Extras', '${escape(_("网络扩展功能"))}')

// NetworkPage.js:157
GetText.add('Network Interface', '${escape(_("网卡"))}')

// InterfacePage.js:101
GetText.add('New Password', '${escape(_("新密码"))}')

// ProxyField.js:55
GetText.add('None', '${escape(_("(无)"))}')

// Menus.js:256, Deluge.js:157
GetText.add('Normal Priority', '${escape(_("Normal Priority"))}')

// Statusbar.js:39
GetText.add('Not Connected', '${escape(_("未连接"))}')

// AddWindow.js:209
GetText.add('Not a valid torrent', '${escape(_("无效的种子文件"))}')

// ConnectionManager.js:180, ConnectionManager.js:188
GetText.add('Offline', '${escape(_("离线"))}')

// EditTrackersWindow.js:57, OtherLimitWindow.js:73, PreferencesWindow.js:108
GetText.add('Ok', '${escape(_("确定"))}')

// InterfacePage.js:97
GetText.add('Old Password', '${escape(_("旧密码"))}')

// Menus.js:99, OptionsTab.js:49, OptionsTab.js:40, DownloadsPage.js:129
GetText.add('Options', '${escape(_("选项"))}')

// Statusbar.js:90, Statusbar.js:138, Statusbar.js:186, OtherPage.js:42, DaemonPage.js:84
GetText.add('Other', '${escape(_("其他"))}')

// EncryptionPage.js:74
GetText.add('Outbound', '${escape(_("出站"))}')

// NetworkPage.js:104
GetText.add('Outgoing Ports', '${escape(_("出网端口"))}')

// AddConnectionWindow.js:88, LoginWindow.js:70, ProxyField.js:95, InterfacePage.js:84, InterfacePage.js:214
GetText.add('Password', '${escape(_("密码"))}')

// DetailsTab.js:48
GetText.add('Path', '${escape(_("位置"))}')

// Menus.js:88, Toolbar.js:70
GetText.add('Pause', '${escape(_("暂停"))}')

// ProxyPage.js:51
GetText.add('Peer', '${escape(_("Peer"))}')

// NetworkPage.js:212
GetText.add('Peer Exchange', '${escape(_("Peer Exchange"))}')

// NetworkPage.js:181
GetText.add('Peer TOS Byte', '${escape(_("Peer TOS Byte"))}')

// TorrentGrid.js:155, TorrentGrid.js:225, PeersTab.js:63
GetText.add('Peers', '${escape(_("用户"))}')

// BandwidthPage.js:135
GetText.add('Per Torrent Bandwidth Usage', '${escape(_("单个任务带宽设置"))}')

// DaemonPage.js:93
GetText.add('Periodically check the website for new releases', '${escape(_("定期检查新版本"))}')

// PluginsPage.js:92
GetText.add('Plugin', '${escape(_("插件"))}')

// InstallPluginWindow.js:66
GetText.add('Plugin Egg', '${escape(_("Egg 插件"))}')

// PluginsPage.js:41
GetText.add('Plugins', '${escape(_("插件"))}')

// AddConnectionWindow.js:72, ProxyField.js:78, DaemonPage.js:52, InterfacePage.js:147
GetText.add('Port', '${escape(_("端口"))}')

// Toolbar.js:94, PreferencesWindow.js:47
GetText.add('Preferences', '${escape(_("选项设置"))}')

// OptionsTab.js:308
GetText.add('Prioritize First/Last', '${escape(_("优先下载 第一个/最后一个"))}')

// OptionsTab.js:153
GetText.add('Prioritize First/Last Pieces', '${escape(_("优先排序"))}')

// DownloadsPage.js:140
GetText.add('Prioritize first and last pieces of torrent', '${escape(_("优先下载 第一个和最后一个种子"))}')

// FilesTab.js:61
GetText.add('Priority', '${escape(_("优先级"))}')

// OptionsTab.js:300
GetText.add('Private', '${escape(_("私有"))}')

// InterfacePage.js:166
GetText.add('Private Key', '${escape(_("私钥"))}')

// TorrentGrid.js:124, FilesTab.js:53
GetText.add('Progress', '${escape(_("进度"))}')

// Statusbar.js:200
GetText.add('Protocol Traffic Download/Upload', '${escape(_("协议流量 下载/上传"))}')

// ProxyPage.js:42
GetText.add('Proxy', '${escape(_("代理"))}')

// Menus.js:181, OptionsTab.js:196, QueuePage.js:41
GetText.add('Queue', '${escape(_("队列"))}')

// QueuePage.js:62
GetText.add('Queue new torrents to top', '${escape(_("新添加的种子 队列置顶"))}')

// BandwidthPage.js:129
GetText.add('Rate limit IP overhead', '${escape(_("Rate limit IP overhead"))}')

// TorrentGrid.js:162
GetText.add('Ratio', '${escape(_("分享率"))}')

// EditTrackersWindow.js:122, ConnectionManager.js:107, Toolbar.js:64, AddWindow.js:111
GetText.add('Remove', '${escape(_("移除"))}')

// Menus.js:224, RemoveWindow.js:39, RemoveWindow.js:57
GetText.add('Remove Torrent', '${escape(_("移除种子"))}')

// RemoveWindow.js:56
GetText.add('Remove With Data', '${escape(_("移除种子和数据"))}')

// OptionsTab.js:253
GetText.add('Remove at ratio', '${escape(_("达到比率后删除"))}')

// QueuePage.js:191
GetText.add('Remove torrent when share ratio is reached', '${escape(_("并且删除种子"))}')

// Menus.js:94, Toolbar.js:76
GetText.add('Resume', '${escape(_("恢复"))}')

// EditTrackerWindow.js:57
GetText.add('Save', '${escape(_("保存"))}')

// TorrentGrid.js:190
GetText.add('Save Path', '${escape(_("保存路径"))}')

// QueuePage.js:142
GetText.add('Seed Time (m)', '${escape(_("做种时间 (分钟)"))}')

// TorrentGrid.js:148, TorrentGrid.js:225
GetText.add('Seeders', '${escape(_("种子"))}')

// QueuePage.js:113
GetText.add('Seeding', '${escape(_("做种中"))}')

// FileWindow.js:66
GetText.add('Select a torrent', '${escape(_("请选择一个种子文件"))}')

// InstallPluginWindow.js:65
GetText.add('Select an egg', '${escape(_("请选择一个 Egg 文件"))}')

// InterfacePage.js:129
GetText.add('Server', '${escape(_("服务器"))}')

// InterfacePage.js:140
GetText.add('Session Timeout', '${escape(_("会话超时"))}')

// Statusbar.js:96
GetText.add('Set Maximum Connections', '${escape(_("设置最大连接数"))}')

// Statusbar.js:143
GetText.add('Set Maximum Download Speed', '${escape(_("设置最大下载速度"))}')

// Statusbar.js:191
GetText.add('Set Maximum Upload Speed', '${escape(_("设置最大上传速度"))}')

// EncryptionPage.js:51, CachePage.js:52
GetText.add('Settings', '${escape(_("设置"))}')

// QueuePage.js:120
GetText.add('Share Ratio Limit', '${escape(_("分享比率限制"))}')

// QueuePage.js:131
GetText.add('Share Time Ratio', '${escape(_("分享时间比率"))}')

// InterfacePage.js:71
GetText.add('Show filters with zero torrents', '${escape(_("显示条目数为0的分类"))}')

// InterfacePage.js:64
GetText.add('Show session speed in titlebar', '${escape(_("在标题栏中显示会话速度"))}')

// TorrentGrid.js:118, FilesTab.js:45, FilesTab.js:54
GetText.add('Size', '${escape(_("文件大小"))}')

// ProxyField.js:56
GetText.add('Socksv4', '${escape(_("Socks v4"))}')

// ProxyField.js:57
GetText.add('Socksv5', '${escape(_("Socks v5"))}')

// ProxyField.js:58
GetText.add('Socksv5 with Auth', '${escape(_("Socks v5 with Auth"))}')

// ConnectionManager.js:191
GetText.add('Start Daemon', '${escape(_("启动 Daemon"))}')

// Sidebar.js:34
GetText.add('State ', '${escape(_("状态"))}')

// ConnectionManager.js:68, StatusTab.js:39, DetailsTab.js:52
GetText.add('Status', '${escape(_("状态"))}')

// ConnectionManager.js:115, ConnectionManager.js:197, ConnectionManager.js:328
GetText.add('Stop Daemon', '${escape(_("停止 Daemon"))}')

// OptionsTab.js:225
GetText.add('Stop seed at ratio', '${escape(_("达到比率后停止"))}')

// QueuePage.js:168
GetText.add('Stop seeding when share ratio reaches:', '${escape(_("自动停止任务 当分享率达到:"))}')

// OtherPage.js:72
GetText.add('System Information', '${escape(_("系统信息"))}')

// NetworkPage.js:173
GetText.add('TOS', '${escape(_("TOS"))}')

// EditTrackersWindow.js:76
GetText.add('Tier', '${escape(_("Tier"))}')

// Menus.js:186
GetText.add('Top', '${escape(_("置顶"))}')

// QueuePage.js:76
GetText.add('Total Active', '${escape(_("全局任务数量"))}')

// QueuePage.js:85
GetText.add('Total Active Downloading', '${escape(_("下载任务数量"))}')

// QueuePage.js:94
GetText.add('Total Active Seeding', '${escape(_("做种任务数量"))}')

// DetailsTab.js:49
GetText.add('Total Size', '${escape(_("空间占用"))}')

// EditTrackersWindow.js:80, TorrentGrid.js:183, EditTrackerWindow.js:66, DetailsTab.js:53, ProxyPage.js:63
GetText.add('Tracker', '${escape(_("Tracker"))}')

// Sidebar.js:35
GetText.add('Tracker Host ', '${escape(_("Tracker 主机"))}')

// AddTrackerWindow.js:66
GetText.add('Trackers', '${escape(_("Trackers"))}')

// ProxyField.js:48
GetText.add('Type', '${escape(_("类型"))}')

// Menus.js:121
GetText.add('U/L Speed Limit', '${escape(_("设置上传限制"))}')

// NetworkPage.js:199
GetText.add('UPnP', '${escape(_("UPnP"))}')

// OptionsPanel.js:142
GetText.add('Unable to set file priority!', '${escape(_("Unable to set file priority!"))}')

// Statusbar.js:85, Statusbar.js:133, Statusbar.js:181, Menus.js:117, Menus.js:135, Menus.js:153, Menus.js:171
GetText.add('Unlimited', '${escape(_("无限制"))}')

// EditTrackersWindow.js:102, Menus.js:192, Toolbar.js:83, FileBrowser.js:53
GetText.add('Up', '${escape(_("上移队列"))}')

// TorrentGrid.js:218
GetText.add('Up Limit', '${escape(_("上传限速"))}')

// TorrentGrid.js:136
GetText.add('Up Speed', '${escape(_("上传速度"))}')

// Menus.js:212
GetText.add('Update Tracker', '${escape(_("更新 Tracker"))}')

// OtherPage.js:56
GetText.add('Updates', '${escape(_("更新"))}')

// Menus.js:157
GetText.add('Upload Slot Limit', '${escape(_("设置同时上传任务数量"))}')

// Statusbar.js:152
GetText.add('Upload Speed', '${escape(_("上传速度"))}')

// TorrentGrid.js:204
GetText.add('Uploaded', '${escape(_("已上传"))}')

// InstallPluginWindow.js:78
GetText.add('Uploading your plugin...', '${escape(_("上传插件中..."))}')

// FileWindow.js:82
GetText.add('Uploading your torrent...', '${escape(_("上传种子中..."))}')

// UrlWindow.js:60, AddWindow.js:102
GetText.add('Url', '${escape(_("地址"))}')

// DownloadsPage.js:121
GetText.add('Use Compact', '${escape(_("紧凑"))}')

// DownloadsPage.js:118
GetText.add('Use Full', '${escape(_("完整"))}')

// NetworkPage.js:60, NetworkPage.js:113
GetText.add('Use Random Ports', '${escape(_("使用随机端口"))}')

// InterfacePage.js:158
GetText.add('Use SSL (paths relative to Deluge config folder)', '${escape(_("使用SSL（使用Deluge config文件夹的相对路径）"))}')

// AddConnectionWindow.js:83, ProxyField.js:88
GetText.add('Username', '${escape(_("用户名"))}')

// ConnectionManager.js:80
GetText.add('Version', '${escape(_("版本"))}')

// ProxyPage.js:57
GetText.add('Web Seed', '${escape(_("Web Seed"))}')

// OtherPage.js:90
GetText.add('Yes, please send anonymous statistics', '${escape(_("Yes, please send anonymous statistics"))}')

// LoginWindow.js:128
GetText.add('You entered an incorrect password', '${escape(_("您输入的密码不正确"))}')

// InterfacePage.js:215
GetText.add('Your old password was incorrect!', '${escape(_("您的旧密码输入错误!"))}')

// InterfacePage.js:225
GetText.add('Your password was successfully changed!', '${escape(_("您的密码已成功更改!"))}')

// InterfacePage.js:200
GetText.add('Your passwords don\'t match!', '${escape(_("您输入的密码不匹配!"))}')


