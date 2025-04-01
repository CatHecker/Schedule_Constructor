import './App.css'
import FormComponent from './FormComponent'

function App() {

  return (
    <>
      <div className="background">
        <div className="light_right_top  lights"></div>
        <div className="light_left_top lights"></div>
        <img src="./Shape-3.png" alt="" className="shapes  s_right_top" />
        <img src="./shape_left_top.png" alt="" className="shapes s_left_top" />
        <img src="./shape_left_bottom.png" alt="" className="shapes s_left_bottom" />
        <img src="./shape_right_bottom.png" alt="" className="shapes s_right_bottom" />
      </div>
      <div className="main">
        
        
        <div className="first_block">
          <header className="logo">
            <img src="./logo.png" alt="" className="logo_img" />
            <div className="v_line"></div>
            <p className="logo_text">
              KAZAN<br/> FEDERAL<br/> UNIVERSITY<br/> SCHEDULE
            </p>
          </header> 
          <div className="titleWords">
            <p className="schConstructor">
              КОНСТРУКТОР РАСПИСАНИЯ
            </p>
            <br/>
            <p className="pluses">
              УДОБСТВО. ЭРГОНОМИЧНОСТЬ. <br/> ПРОДУКТИВНОСТЬ.
            </p>
            <br/>
            <div className="div_with_button">
              <button className="createSch">СОЗДАТЬ <br/> РАСПИСАНИЕ</button>
            </div>
            
          </div> 
        </div>

        <div className="table_block">
          <FormComponent/>
        </div>

        <div className="developers">

          <div className="devsInfo">
            <div className="dev1">
              <img src="./nikita.png" alt="" />
              <div className="devName">Ахияров <br/>Эмиль</div>
              <div className="devDesc">Frontend разработка <br/> Менджер проекта</div>
            </div>
            <div className="dev2">
              <img src="./nikita.png" alt="" />
              <div className="devName">Алимбаев <br/>Азамбек</div>
              <div className="devDesc">Разработка дизайна. <br/> Резюме проекта</div>
            </div>
            <div className="dev3">
              <img src="./nikita.png" alt="" />
              <div className="devName">Слывка<br/> Никита</div>
              <div className="devDesc">Backend разработка <br/> Создание макросов</div>
            </div>
          </div>
        </div>

        <footer>
          <h3>Made with love in Tatarstan ❤️ <br/> 2025 </h3>
          <img src="./tatarstan.png" alt="" className="tatarstan" />
        </footer>

        
      </div>
      <img src="./phew.png" alt="" className="phew" />
    </>
  )
}

export default App
