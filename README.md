# Graduation Project

#### 介绍
Vue3.js、nest.js、vant、mySql的移动端高校学生分享交流论坛的设计与构建

##### 技术栈
vue3.0 + nestJS + mySql

##### 论坛大致功能
实现登录、注册、需要验证码功能，可多级评论，需要个人主页  
未登录时可以看帖，但是不能回复以及发布帖子、评论  
帖子可以上传图片、评论不行  
可以看到自己发布的帖子，一旦帖子被回复，有消息提示(评论者评论帖子的时候，都会调用接口更新数据库数据、贴主在切换页面的时候，会触发接口调用，更新自己的页面，最好有下标)  
注册需要账号，密码，昵称，学校（可选）、性别、  
可以点赞、收藏文章
#### 软件架构
软件架构说明


#### 安装教程

1.  终端命令行输入 git clone https://gitee.com/wang-mingshun/graduation-project.git将本项目拷贝至本地
2.  终端在forum-frontend目录下输入yarn serve以启动前端项目
3.  终端在forum-rearend目录下输入yarn run start:dev以启动后端项目

