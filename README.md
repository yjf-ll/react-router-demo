## react-router-dom  v6  使用记录

- #### 项目中安装react路由

  > yarn add react-router-dom

- #### 基本使用方法

  > 在根组件中：
  >
  > 用BrowserRouter组件包裹Routers组件，在Routers里面设置一个根路由组件，在根路由组件中设置平级的路由，想共享父组件ui的话，可以添加下面的outlet组件

  ```react
  function Main() {
    return (
      <div>
        <h2>react-router</h2>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
        // 想共享父组件ui的话，可以添加下面的outlet组件
        <Outlet/>
      </div>
    )
  }
  /**********以下是根精简的代码********/
  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
  ```

- #### 在根路由中设置默认路由

  > 如果没有点击link组件的话，页面默认就是展示main的内容，当然也可以设置一个默认路由

  ```react
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}>
          
        // 根路由中默认就会展示该index路由
        <Route index element={<Home />} />
          
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  ```

- #### 路由传值

  > 直接看代码

  ```react
  import {useParams} from "react-router-dom";
  
  function Item() {
    const {itemId} = useParams();
  
    const info = getItemInfo(itemId);
  
    console.log(info)
  
    return (
      <div>
        <div>name: {info.name}</div>
        <div>amount: {info.amount}</div>
        <div>number: {info.number}</div>
        <div>due: {info.due}</div>
      </div>
    )
  }
  /**********/
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}>
          // 该路径的组件可以使用useParams()来获取itemId
          <Route path=":itemId" element={<Item/>}/>
        </Route>
      </Route>
      <Route path="*" element={<Unknown/>}/>
    </Routes>
  </BrowserRouter>
  ```

  

