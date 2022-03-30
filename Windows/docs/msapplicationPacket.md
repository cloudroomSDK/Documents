# 应用发布

## sdk包与应用同步安装

<p>要实现sdk包与应用同步安装有两种方案:</p>
  1. 将云屋插件安装包携带在应用的安装包内， 在安装过程中静默执行安装操作， 命令如下：

  ```
    安装命令:
      CloudroomVideoSDK.exe /verysilent /norestart
  ```

  ```
    卸载命令： （安装后， 安装目录下有个uninstall.exe）
      uninstall.exe /verysilent /norestart
  ```

  2. 将sdk包下的bin目录携带在应用的安装包内，在安装过程中对npcloudroomvideosdk.dll执行com注册，命令如下

  ```
    注册命令:
      regsvr32.exe 文件路径\npCloudroomVideoSDK.dll
  ```

  ```
    反注册命令:
      regsvr32.exe /u 文件路径\npCloudroomVideoSDK.dll
  ```

  版本升级时， 可以不用先卸载， 直接覆盖安装即可。
  如果更换了安装目录，要先反注册，再对新安装目录执行注册操作。

## sdk是否安装检测
  1. 尝试创建sdk实现， 创建不成功就代表没安装，或sdk处理不可用状态；
  2. 创建成功后， 可通过sdk的Version属性取得版本号，检测是否为正确版本；