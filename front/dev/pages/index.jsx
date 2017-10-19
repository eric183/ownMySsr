import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/main.scss';

var userInfo = {
    name: "匡志宸",
    title: "前端工程师"
}

class Index extends React.Component {
    render() {
        return (
            <div className="hellowolrd">
                <Header userInfo={this.props.userInfo}/>
                <Container />
                <Footer />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="resume-header">
                <header>
                    <h1>{this.props.userInfo.title}</h1>
                    <p>{this.props.userInfo.name}</p>
                </header>
            </div>
        )
    }
} 

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <About />
                <Work />
                <Experience />
            </div>
        )
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div className="experience-content content">
                <h2>项目经验</h2>
                <ul>
                    <li className="content-single">
                        <ul>
                            <li>项目：imama_front-builder</li>
                            <li>技术栈：Node、Gulp、Webpack、ES6、Commonjs</li>
                            <li>项目周期： 2016-06-16至今 </li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 个人开发与维护</li>
                            <li>项目介绍：  负责构建处理公司所有前端业务代码。 
                            </li>
                        </ul> 
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目：妈咪HOME</li>
                            <li>技术栈：Vue、Vuex、Ricout、ES6、Node</li>
                            <li>总体框架： Vue0.21 ---> Vue1.0 ---> Vue2.0 </li>
                            <li>项目周期： 2016-06-16至今 </li>
                            <li>状态管理： Vuex || Global Store Object</li>
                            <li>数据请求： jQueryAjax || Fetch Api</li>
                            <li>路由处理： Ricout (个人开源、个人维护)</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6 && Post-css && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。
                                版本更迭功能完善，前端交互优化、性能优化。
                                项目整体优化，入口迁移等等</li>
                            <li>项目介绍： 
                                <p>
                                    考虑到今后公司产品日益完善与产品转型的驱动的条件下，我们需要做一个统一的入口，将公司内部的其他产品逐渐整合进来， 在多次的会议讨论与项目爬坑之后，我们开始着手妈咪HOME的项目。<br/>
                                    项目框架最开始使用Vue0.21，webpack打包统一入口main.min.js，第三方工具与入口版本号统一gulp打包处理， 在开发的时候出了很多问题且没有发挥出框架的优势，<br/>
                                    去年9月我用闲暇时间，花了5天对项目主体框架和打包工具进行重构。期间考虑到加载性能，去掉css文件加载，于是Sass编译打包到入口main.min.js，以style标签的形式插入文档，首屏加载速度直线上升，从最开始的6s左右减少到700ms左右, 部分重构迁徙到Vue1.0的BUG修复以后，7天左右的时间正式上线。此次重构主要针对客户端体验。<br/>
                                    之后在今年6月的时候，我花了一周左右的时间又进行了一次重构，将Vue1.0升到Vue2.0。项目结构也做了很大调整，此次重构主要针对开发效率与项目管理的节奏。
                                </p>
                            </li>
                        </ul>
                    </li>  
                    <li className="content-single">
                        <ul>
                            <li>项目：妈咪问医</li>
                            <li>技术栈：Vue、Vuex、Ricout、ES6、Node</li>
                            <li>总体框架： Vue0.21 ---> Vue1.0 ---> Vue2.0 </li>
                            <li>项目周期： 2016-04-02至今 </li>
                            <li>状态管理： Vuex || Global Store Object</li>
                            <li>数据请求： jQueryAjax || Fetch Api</li>
                            <li>路由处理： Ricout (个人开源、个人维护)</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6 && Post-css && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。
                                版本更迭功能完善，前端交互优化、性能优化。
                                项目整体优化，入口迁移等等</li>
                            <li>项目介绍： 
                                <p>
                                    妈咪问医是一个面相医患群体的类分答项目，平台基于微信，我们维护开发从简陋的第一版，到现在功能丰富并迁移集成于妈咪HOME，整个过程历时将近一年，目前平台上入驻医生已近1000，目的是做内容最专业的面相医患问答线上产品。
                                </p>
                            </li>
                        </ul>
                    </li>  
                    <li className="content-single">
                         <ul>
                            <li>项目：直播课堂</li>
                            <li>技术栈：Vue、Vuex、Ricout、ES6、Node</li>
                            <li>总体框架： Vue0.21 ---> Vue1.0 ---> Vue2.0 </li>
                            <li>项目周期： 2016-04-02至今 </li>
                            <li>状态管理： Vuex || Global Store Object</li>
                            <li>数据请求： jQueryAjax || Fetch Api</li>
                            <li>路由处理： Ricout (个人开源、个人维护)</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6 && Post-css && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。
                                版本更迭功能完善，前端交互优化、性能优化。
                                项目整体优化，入口迁移等等</li>
                            <li>项目介绍： 
                                <p>
                                   该项目初次开始时，还是一个UI简陋功能简单代码结构混乱的页面，前端没有打包没有代码结构的管理方案，框架是使用的vue0.21 + jquery，落后的api和架构导致页面性能极差与维护困难，而且协议仅仅是单纯的socket。
                                   之后我着手整个项目重构，vue0.21 ->vue1.0的迁移，弱化jquery的依赖，引入gulp + webpack工作流，并且使用babel处理es6，直播协议换成mqtt等等，现已迁移至妈咪HOME入口。
                                </p>
                            </li>
                        </ul>   
                    </li>
                     <li className="content-single">
                         <ul>
                            <li>项目： 爱mama活动框架</li>
                            <li>技术栈：Vue、Vuex、Ricout、ES6、Node、phantomjs</li>
                            <li>总体框架：Vue1.0</li>
                            <li>项目周期： 2016-06-16至今 </li>
                            <li>状态管理： Global Store Object</li>
                            <li>数据请求： jQueryAjax || Fetch Api</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6  && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。
                                版本更迭功能完善，前端交互优化、性能优化。</li>
                            <li>项目介绍： 
                                <p>
                                  改项目产生于运营需求，我们需要一套脚手架来开发公众号企业活动，目前有前后端数据交互，后端模拟前端渲染数据截图等等功能，完善中
                                </p>
                            </li>
                        </ul>   
                    </li>
                     <li className="content-single">
                         <ul>
                            <li>项目：official_webside</li>
                            <li>技术栈：React、React-router、ES6、Node</li>
                            <li>总体框架：React </li>
                            <li>项目周期： 2016-07-26至今 </li>
                            <li>路由处理： React-router</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6 && Post-css && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。</li>
                            <li>项目介绍： 
                                <p>
                                    一个基于react栈的单页框架，没有复杂的交互，开发历时三天上线。之后考虑到SEO，个人重构了React，并开发了基于React-server-render的脚手架（待完善、未开源），用于各种后端技术的SSR。种种原因还未上线，有些遗憾
                                </p>
                            </li>
                        </ul>   
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目：医院小工具</li>
                            <li>技术栈：Vue、Vuex、Ricout、ES6、Node</li>
                            <li>总体框架： Vue0.21 ---> Vue1.0 ---> Vue2.0 </li>
                            <li>项目周期： 2016-04-02至今 </li>
                            <li>状态管理： Vuex || Global Store Object</li>
                            <li>数据请求： jQueryAjax || Fetch Api</li>
                            <li>路由处理： Ricout (个人开源、个人维护)</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6 && Post-css && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。
                                版本更迭功能完善，前端交互优化、性能优化。
                                项目整体优化，入口迁移等等</li>
                            <li>项目介绍： 
                                <p>
                                   这个需求是公司线下运营与医院合作方所提出的需求，要做一个面向C端用户人群的小工具，主要的功能目的是缓解医患沟通的困难和压力。
                                   例如：随诊工具、数胎动、疫苗计划、胎儿体重。
                                   该项目已经上线，整合入妈咪HOME。
                                </p>
                            </li>
                        </ul> 
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目：一家亲月嫂 + 后台</li>
                            <li>技术栈：Vue、Vuex、Ricout、ES6、Node</li>
                            <li>总体框架： Vue2.0 </li>
                            <li>项目周期： 2017-03-22至今 </li>
                            <li>状态管理： Vuex || Global Store Object</li>
                            <li>数据请求： jQueryAjax || Fetch Api</li>
                            <li>路由处理： Ricout (个人开源、个人维护)</li>
                            <li>前端构建： Node && Gulp && Webpack</li>
                            <li>代码规范： HTML5 && CSS3 && ES6 && Post-css && Sass</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色： 框架选型、框架搭载、初期版本的上线。
                                版本更迭功能完善，前端交互优化、性能优化。
                                项目整体优化，入口迁移等等</li>
                            <li>项目介绍： 
                              
                                   此项目开始于年初，加上后台历时半个月上线，前端直接采用es6,webpack2.0构建。
                              
                            </li>
                        </ul> 
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目：三分钟课堂小程序</li>
                            <li>技术栈：ES6，wxjs</li>
                            <li>项目周期： 2017-07-15至今（进行中） </li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3 || wechat developing tools</li>
                            <li>项目介绍： 项目始于7月中， 框架已搭好，初期代码已写好，待上线中</li>
                        </ul> 
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目： 爱婴慧管理后台</li>
                            <li>技术栈: Angular</li>
                            <li>项目周期:  2016-04-02至今</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3</li>
                            <li>项目角色：版本更迭功能完善 </li>
                        </ul>
                    </li>  
                    <li className="content-single">
                        <ul>
                            <li>项目： 中国蓝-Android</li>
                            <li>技术栈: cordova、 hybird、android、javascript</li>
                            <li>项目周期:  2015-12 历时 2个月</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3 || Android Studio</li>
                            <li>项目角色：配合产品技术进行周期开发、跟进程序bug、促使其在google与firetv上线 </li>
                        </ul>
                    </li> 
                    <li className="content-single">
                        <ul>
                            <li>项目： 兔小贝</li>
                            <li>技术栈: cordova、 hybird、android、javascript</li>
                            <li>项目周期:  2015-12 历时 2个月</li>
                            <li>IDE工具： Visual Studio Code || Sublime Text 3 || Android Studio</li>
                            <li>项目角色：配合产品技术进行周期开发 </li>
                        </ul>
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目： 斑马王国假日活动</li>
                            <li>技术栈: javascript</li>
                            <li>项目周期:  2015年8月历时半个月</li>
                            <li>IDE工具： Sublime Text 3 </li>
                            <li>项目角色：前端开发、动画编写</li>
                        </ul>
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目： 斑马王国移动端主页</li>
                            <li>技术栈: javascript</li>
                            <li>项目周期:  2015年7月~8月</li>
                            <li>IDE工具： Sublime Text 3 </li>
                            <li>项目角色：前端开发</li>
                        </ul>
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>项目： 斑马王国企业后台</li>
                            <li>技术栈: javascript</li>
                            <li>项目周期:  2015年6月~11月</li>
                            <li>IDE工具： Sublime Text 3 </li>
                            <li>项目角色：前端开发</li>
                        </ul>
                    </li>
                    ......
                </ul>
                
            </div>
        )
    }
}

class Work extends React.Component {
    render() {
        return (
            <div className="about-content content">
                <h2>工作经历</h2>
                <ul>
                    <li className="content-single">
                        <ul>
                            <li>公司： 爱婴慧</li>
                            <li>公司地址： 深圳</li>
                            <li>职位： 前端工程师</li>
                            <li>时间：2016年6月至今</li>
                        </ul>
                    </li>
                          <li className="content-single">
                        <ul>
                            <li>公司： 东方嘉禾</li>
                            <li>公司地址： 北京</li>
                            <li>职位： 前端工程师</li>
                            <li>时间：2015年11月~2016年3月</li>
                        </ul>
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>公司： 斑马王国</li>
                            <li>公司地址： 北京</li>
                            <li>职位： 前端工程师</li>
                            <li>时间：2015年6月~11月</li>
                        </ul>
                    </li>
                    <li className="content-single">
                        <ul>
                            <li>公司： 易快报科技有限公司</li>
                            <li>公司地址： 北京</li>
                            <li>职位： 前端工程师</li>
                            <li>时间：2015年3月~4月</li>
                        </ul>
                    </li>
           
              
                
                </ul>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div className="about-content content">
                <h2>关于我</h2>
                <ul>
                    <li>姓名： 匡志宸</li>
                    <li>技能: javascript、java</li>
                    <li>技术工作年限： 3年</li>
                    <li>学校： 西安翻译学院。(境外实习所致未获得学位)</li>
                    <li>电话： 18801145391</li>
                    <li>邮箱： kk297466058@aliyun.com</li>
                    <li>项目地址： 
                        <ul>
                            <li>github: https://github.com/eric183</li>
                            <li>coding: https://coding.net/u/ericwonder</li>
                        </ul>
                     </li>
                </ul>
            </div>
        )
    }
}


class Footer extends React.Component {
    render() {
        return (
            <footer>
                感谢您花时间阅读，期待合作，谢谢~
            </footer>
        )
    }
}
ReactDOM.render(
  <Index userInfo={userInfo}/>,
  document.getElementById('root')
);