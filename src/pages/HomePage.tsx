import { useEffect, useState } from 'react';
//import { Button, Typography } from 'antd';

//const { Title, Text, Paragraph } = Typography;

const navItems = ['О курсе', 'Симптомы', 'Как это работает', 'Специалисты'];





export const HomePage = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderFixed(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkColor = '#111';
  const pillBg = '#FFF3E6';
  const pillBorder = 'none';

 return (
  // Уберите фон из корневого div или сделайте его белым
<div style={{ 
  background: '#FFFFFF',    // ← было #F2F2F0, теперь белый
  minHeight: '100vh',
  width: '100%',
  fontFamily: 'Inter, sans-serif', 
  color: '#111',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}>
    <style>{`
      * { box-sizing: border-box; margin: 0; padding: 0; }  /* ← добавьте сброс отступов */
      html, body, #root { 
        min-height: 100%; 
        width: 100%;              /* ← растягиваем html/body */
      }
      body { margin: 0; }
      
      /* Центрируем #root — это важно! */
      #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100vh;
      }
      
      .page-container { 
        width: min(1200px, 100%); 
        margin: 0 auto; 
      }
      .site-header { 
        position: relative;       /* ← fixed ломает центрирование! */
        z-index: 20; 
        width: 100%;
        max-width: 1409px;        /* ← ограничиваем ширину */
        margin: 44px auto 0;      /* ← центрируем: сверху 44px, по бокам auto */
      }
      .nav-pill { 
        display: inline-flex; 
        align-items: center; 
        justify-content: center; 
        height: 32px; 
        border-radius: 53px; 
        padding: 8px 16px; 
        font-family: 'Evolventa', sans-serif; 
        font-weight: 400; 
        font-size: 16px; 
        line-height: 21px; 
        text-decoration: none; 
        background: #FFF3E6; 
        border: none; 
        color: #111111; 
      }
      .nav-pill:hover { opacity: 0.9; }
    `}</style>
      <div style={{ position: 'absolute', overflow: 'hidden' }}>
        <img src="/underheader.png" alt="" style={{ width: '1734px', height: '697px', display: 'block', objectFit: 'cover' }} />
        <h1 style={{
          position: 'absolute',
          width: '475px',
          height: '131px',
          left: '164px',
          top: '257px',
          fontFamily: "'mr_GuardianCircusG', sans-serif", // Не забудь подключить шрифт!
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '78px',
          lineHeight: '63px', // Обратите внимание: lineHeight меньше fontSize, буквы могут наезжать друг на друга
          color: '#3D1903'
        }}>
          Собери свой сад из новых привычек
        </h1>
         
        <div style={{
          position: 'absolute',
          width: '419px',
          height: '72px',
          left: '164px',
          top: '397px',
  
          fontFamily: "'Evolventa', sans-serif",
          fontStyle: 'normal',
          fontSize: '24px',
          lineHeight: '24px',
          color: '#3D1903',
  
          margin: 0,
          // whiteSpace: 'normal' разрешает перенос строк
          }}>
          <span style={{ fontWeight: 'bold' }}>6 симптомов | 6 модулей</span> <br />
          <span style={{ fontWeight: 400 }}>
            понятные шаги и трекеры, которые реально меняют поведение
          </span>
  
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px 24px',
          gap: '16px',
          position: 'absolute',
          width: '340px',
          height: '56px',
          left: '164px',
          top: '513px',
          background: '#F4F5F0',
          borderRadius: '38px',
          cursor: 'pointer',
          border: 'none'
        }}>
          <span style={{
            width: '292px',
            height: '24px',
            fontFamily: "'Evolventa', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '24px',
            color: '#111111',
            flex: 'none',
            order: 0,
            flexGrow: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            Начать выращивать сад
          </span>
        </div>


<section style={{
  position: 'relative',
  padding: '0',
  backgroundImage: 'url("/kourse.png")',
  width: '1734px',
  height: '812px',  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}}>

  {/* 1. ЗАГОЛОВОК */}
  <h2 style={{
    position: 'absolute',
    left: '164px',
    top: '100px',
    fontFamily: "'Evolventa', sans-serif",
    fontWeight: 700,
    fontSize: '48px',
    lineHeight: '40px',
    color: '#3D1903',
    margin: 0,
    zIndex: 10
  }}>
    Ты узнаешь себя?
  </h2>

  {/* 2. КАРТОЧКИ */}
  <div style={{
    position: 'absolute',
    left: '162px',
    top: '200px',
    display: 'flex',
    gap: '24px'
  }}>
    {/* Карточка 1 */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '28px', // 28px от границы до фото и текста
      gap: '28px', // 28px между фото и текстом
      width: '335px',
      height: '309px',
      background: '#F4F5F0',
      borderRadius: '15px',
    }}>
      <img src="/k1.png" alt="" style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }} />
      <p style={{ margin: 0, fontFamily: "'Evolventa', sans-serif", fontSize: '16px', color: '#3D1903' }}>
        Ты откладываешь даже важные дела
      </p>
    </div>

    {/* Карточка 2 */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '28px',
      gap: '28px',
      width: '335px',
      height: '309px',
      background: '#F4F5F0',
      borderRadius: '15px',
    }}>
      <img src="/k2.png" alt="" style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }} />
      <p style={{ margin: 0, fontFamily: "'Evolventa', sans-serif", fontSize: '16px', color: '#3D1903' }}>
        Подстраиваешься под других и теряешь себя
      </p>
    </div>

    {/* Карточка 3 */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '28px',
      gap: '28px',
      width: '335px',
      height: '309px',
      background: '#F4F5F0',
      borderRadius: '15px',
    }}>
      <img src="/k3.png" alt="" style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }} />
      <p style={{ margin: 0, fontFamily: "'Evolventa', sans-serif", fontSize: '16px', color: '#3D1903' }}>
        Чувствуешь выгорание без явной причины
      </p>
    </div>

    {/* Карточка 4 */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '28px',
      gap: '28px',
      width: '335px',
      height: '309px',
      background: '#F4F5F0',
      borderRadius: '15px',
    }}>
      <img src="/k4.png" alt="" style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }} />
      <p style={{ margin: 0, fontFamily: "'Evolventa', sans-serif", fontSize: '16px', color: '#3D1903' }}>
        Помогаешь всем, но не себе
      </p>
    </div>
  </div>

  {/* 3. НИЖНИЙ ТЕКСТ */}
  <p style={{
    position: 'absolute',
    width: '820px',
    height: '106px',
    left: 'calc(50% - 820px/2 + 295px)',
    top: '545px',
    fontFamily: "'Evolventa', sans-serif",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '40px',
    lineHeight: '53px',
    color: '#3D1903',
    margin: 0
  }}>
    Если ты узнал(а) себя хотя бы в одном — этот курс для
  </p>

  {/* 4. Слово "тебя" */}
  <span style={{
    position: 'absolute',
    width: '115px',
    height: '40px',
    left: 'calc(50% - 115px/2 + 209.5px)',
    top: '640px',
    fontFamily: "'mr_GuardianCircusG', cursive",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '78px',
    lineHeight: '40px',
    color: '#3D1903',
    zIndex: 10,
    pointerEvents: 'none'
  }}>
    тебя
  </span>

</section>


        

        
{/* Заголовок "Как устроен курс?" */}
<section style={{
  position: 'relative',
  width: '1734px',
  height: "911px",
  minHeight: '812px',
  padding: '100px 20px',
  backgroundImage: 'url("/hk0.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
}}>
  <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 520px', maxWidth: '720px', minWidth: '320px' }}>
      
      {/* Заголовок "Как устроен курс?" */}
      <h2 style={{
        position: 'absolute',
        width: '453px',
        height: '40px',
        left: 'calc(50% - 453px/2 - 478.5px)',
        top: '132px',
        fontFamily: "'Evolventa', sans-serif",
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '48px',
        lineHeight: '40px',
        color: '#F4F5F0',
        margin: 0
      }}>
        Как устроен курс?
      </h2>

      {/* Список шагов */}
      <div style={{
        position: 'absolute',
        left: '196px',
        top: '317px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0'
      }}>
        
        {/* Шаг 1 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            border: '1px solid #F4F5F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Evolventa', sans-serif",
            fontSize: '40px',
            fontWeight: 400,
            color: '#F4F5F0',
            flexShrink: 0
          }}>
            1
          </div>
          <div>
            <p style={{
              fontFamily: "'Evolventa', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '53px',
              color: '#F4F5F0',
              margin: 0
            }}>
              Ты выбираешь симптом
            </p>
            <p style={{
              fontFamily: "'Evolventa', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '53px',
              color: '#F4F5F0',
              margin: 0
            }}>
              → получаешь "семя"
            </p>
          </div>
        </div>

        {/* Вертикальная линия 1-2 */}
        <div style={{
          width: '1px',
          height: '87px',
          background: '#F4F5F0',
          marginLeft: '34px',
          marginTop: '-38px'
          
        }} />

        {/* Шаг 2 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            border: '1px solid #F4F5F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Evolventa', sans-serif",
            fontSize: '40px',
            fontWeight: 400,
            color: '#F4F5F0',
            flexShrink: 0
          }}>
            2
          </div>
          <div>
            <p style={{
              fontFamily: "'Evolventa', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '53px',
              color: '#F4F5F0',
              margin: 0
            }}>
              Проходишь модуль
            </p>
            <p style={{
              fontFamily: "'Evolventa', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '53px',
              color: '#F4F5F0',
              margin: 0
            }}>
              → выполняешь практики
            </p>
          </div>
        </div>

        {/* Вертикальная линия 2-3 */}
        <div style={{
          width: '1px',
          height: '87px',
          background: '#F4F5F0',
          marginLeft: '34px',
          marginTop: '-38px'
        }} />

        {/* Шаг 3 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px'}}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            border: '1px solid #F4F5F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Evolventa', sans-serif",
            fontSize: '40px',
            fontWeight: 400,
            color: '#F4F5F0',
            flexShrink: 0
          }}>
            3
          </div>
          <div>
            <p style={{
              fontFamily: "'Evolventa', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '53px',
              color: '#F4F5F0',
              margin: 0
            }}>
              Закрываешь трекер
            </p>
            <p style={{
              fontFamily: "'Evolventa', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '40px',
              lineHeight: '53px',
              color: '#F4F5F0',
              margin: 0
            }}>
              → цветок вырастает
            </p>
          </div>
        </div>

        {/* Вертикальная линия 3-4 */}
        <div style={{
          width: '1px',
          height: '87px',
          background: '#F4F5F0',
          marginLeft: '34px', 
          marginTop: '-38px'
        }} />

        {/* Шаг 4 */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            border: '1px solid #F4F5F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Evolventa', sans-serif",
            fontSize: '40px',
            fontWeight: 400,
            color: '#F4F5F0',
            flexShrink: 0
          }}>
            4
          </div>
          <p style={{
            fontFamily: "'Evolventa', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '40px',
            lineHeight: '53px',
            color: '#F4F5F0',
            margin: 0
          }}>
            Собираешь свой сад
          </p>
        </div>
      </div>
    </div>

    <div style={{
      flex: '1 1 420px',
      maxWidth: '620px',
      minWidth: '280px',
      borderRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 40px 120px rgba(0,0,0,0.18)',
      background: '#FFFFFF',
    }}>
      <img src="/hk.png" alt="Как устроен курс" style={{ position: 'absolute',
  width: '693px',
  height: '647px',
  left: '879px',
  top: '132px',
  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  borderRadius: '15px' }} />
    </div>
  </div>
</section>


  <section style={{
  position: 'relative',
  padding: '0',
  backgroundImage: 'url("/flowers.png")',
  width: '1734px',
  height: '1591px',  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}}>
<h2 style={{
  position: 'absolute',
  width: '570px',
  height: '40px',
  left: 'calc(50% - 570px/2)', // Идеальное центрирование по горизонтали
  top: '130px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '40px',
  
  color: '#000000',
  margin: 0 // Сброс стандартных отступов браузера
}}>
  6 симптомов = 6 цветов
</h2>
<p style={{
  position: 'absolute',
  width: '430px',
  height: '48px',
  left: 'calc(50% - 430px/2 - 70px)', // Центрирование со сдвигом влево на 70px
  top: '186px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  
  color: '#000000',
  margin: 0 // Сброс стандартных отступов браузера
}}>
  Каждый цветок — это не проблема. Это точка роста, которую можно
</p>
<span style={{
  position: 'absolute',
  width: '248px',
  height: '40px',
  left: 'calc(50% - 248px/2 + 161px)', // Центрирование со сдвигом вправо на 161px
  top: '236px',
  
  fontFamily: "'mr_GuardianCircusG', cursive",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '78px',
  lineHeight: '40px',
  
  color: '#000000',
  
  zIndex: 10,
  pointerEvents: 'none' // Чтобы сквозь элемент можно было кликать, если он перекрывает что-то
}}>
  изменить
</span>
<div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Элементы прижаты к левому краю
  padding: '0px',
  
  position: 'absolute',
  width: '1410px',
  height: '1131px',
  left: '162px',
  top: '276px'
}}>

  <div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center', // Вертикальное центрирование содержимого
  padding: '0px',
  gap: '24px', // Отступ между элементами внутри
  
  width: '1410px',
  height: '377px',
  
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0
}}>
  <img 
  src="/f1.png" 
  alt="" 
/>
<img 
  src="/f2.png" 
  alt="" 
/>

  {/* 
     Сюда вставляй два основных элемента:
     1. Левая часть (например, изображение или карточка)
     2. Правая часть (текст, описание)
     
     Благодаря gap: 24px они автоматически отстоят друг от друга на 24px.
  */}
</div>
<div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '24px',
  
  width: '1410px',
  height: '377px',
  
  flex: 'none',
  order: 1, // Встанет вторым после Frame 918 (order: 0)
  alignSelf: 'stretch',
  flexGrow: 0
}}>
    <img 
  src="/f1.png" 
  alt="" 
/>
<img 
  src="/f2.png" 
  alt="" 
/>
  {/* Вставь сюда контент: например, текст слева и изображение справа */}
</div>

<div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '24px',
  
  width: '1410px',
  height: '377px',
  
  flex: 'none',
  order: 2, // Встанет третьим после Frame 918 (order: 0) и Frame 919 (order: 1)
  alignSelf: 'stretch',
  flexGrow: 0
}}>
      <img 
  src="/f5.png" 
  alt="" 
/>
<img 
  src="/f6.png" 
  alt="" 
/>
  {/* Вставь сюда контент: например, изображение слева и текст справа */}
</div>
  {/* 
     Сюда вставляй блоки контента (например, Frame 918 или карточки).
     Так как стоит flex-direction: column, они встанут друг под другом.
     Можно добавить gap: '24px' родителю, если нужны отступы между блоками.
  */}
</div>

</section> 


{/* Лайны */}
<section style={{
  position: 'relative',
  padding: '0',
  backgroundImage: 'url("/lines.png")',
  width: '1734px',
  height: '1024px',  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}}>
<div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 520px', maxWidth: '720px', minWidth: '320px' }}></div>
    <h2 style={{
  position: 'absolute',
  width: '782px',
  height: '80px',
  left: 'calc(50% - 782px/2 - 314px)',
  top: '132px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '40px',
  
  color: '#F4F5F0',
  margin: 0 // Сброс стандартных отступов заголовка
}}>
  Ты не будешь просто слушать — ты будешь менять себя
</h2>
<p style={{
  position: 'absolute',
  width: '903px',
  height: '24px',
  left: 'calc(50% - 903px/2 - 253.5px)',
  top: '234px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  
  color: '#F4F5F0',
  margin: 0 // Сброс стандартных отступов
}}>
  Каждый модуль — это короткий путь от “я так живу” к “я делаю по-другому”
</p>


<div style={{
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '28px 27px 28px 28px',
  gap: '10px',
  
  position: 'absolute',
  width: '693px',
  height: '138px',
  left: '162px',
  top: '292px',
  
  background: '#FFF3E6',
  borderRadius: '15px'
}}>
  <h3 style={{
  width: '638px',
  height: '24px',
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс стандартных отступов заголовка
}}>
  Короткая теория
</h3>

<p style={{
  width: '638px',
  height: '42px', // Примечание ниже про эту высоту
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 1, // Встанет вторым после заголовка
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс отступов
}}>
  Понимаешь, почему это происходит именно с тобой
  <br />
  (без воды и сложных терминов)
</p>
</div>

<div style={{
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '28px',
  gap: '10px',
  
  position: 'absolute',
  width: '693px',
  height: '138px',
  left: '162px',
  top: '446px',
  
  background: '#FFF3E6',
  borderRadius: '15px'
}}>
  <h3 style={{
  width: '638px',
  height: '24px',
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс стандартных отступов заголовка
}}>
  Практики
</h3>

<p style={{
  width: '638px',
  height: '42px', // Примечание ниже про эту высоту
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 1, // Встанет вторым после заголовка
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс отступов
}}>
  Конкретные действия, которые ты внедряешь <br /> в жизнь сразу

</p>
</div>

<div style={{
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '28px 27px 28px 28px',
  gap: '10px',
  
  position: 'absolute',
  width: '693px',
  height: '138px',
  left: '162px',
  top: '600px',
  
  background: '#FFF3E6',
  borderRadius: '15px'
}}>
  <h3 style={{
  width: '638px',
  height: '24px',
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс стандартных отступов заголовка
}}>
  Разборы ситуаций
</h3>

<p style={{
  width: '638px',
  height: '42px', // Примечание ниже про эту высоту
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 1, // Встанет вторым после заголовка
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс отступов
}}>
  Узнаёшь себя в примерах и понимаешь, <br /> как действовать иначе

</p>
</div>

<div style={{
  display: 'flex', 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '28px 27px 28px 28px',
  gap: '10px',
  
  position: 'absolute',
  width: '693px',
  height: '138px',
  left: '162px',
  top: '754px',
  
  background: '#FFF3E6',
  borderRadius: '15px'
}}>
  <h3 style={{
  width: '638px',
  height: '24px',
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 0,
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс стандартных отступов заголовка
}}>
  Трекер изменений
</h3>

<p style={{
  width: '638px',
  height: '42px', // Примечание ниже про эту высоту
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#3D1903',
  
  flex: 'none',
  order: 1, // Встанет вторым после заголовка
  alignSelf: 'stretch',
  flexGrow: 0,
  
  margin: 0 // Сброс отступов
}}>
  Фиксируешь результат и видишь, как меняется <br /> твоё поведение

</p>
</div>

</div>
</section>


{/* Психологи */}
 <section style={{
  position: 'relative',
  padding: '0',
  backgroundImage: 'url("/Psy.png")',
  width: '1734px',
  height: '649px',  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}}>
<div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 520px', maxWidth: '720px', minWidth: '320px' }}></div>
    <h2 style={{
  position: 'absolute',
  width: '860px',
  height: '40px',
  left: 'calc(50% - 860px/2 - 275px)',
  top: '132px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '40px',
  
  color: '#3D1903',
  margin: 0
}}>
  Этот сад ты выращиваешь не один
</h2>
<p style={{
  position: 'absolute',
  width: '536px',
  height: '24px',
  left: 'calc(50% - 536px/2 - 437px)',
  top: '188px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  
  color: '#3D1903',
  margin: 0 // Сброс стандартных отступов браузера
}}>
  С тобой работают практикующие психологи
</p>
<div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '12px',
  
  position: 'absolute',
  width: '658px',
  height: '64px',
  left: '879px',
  top: '228px',
  borderLeft: '1px solid #000000', // Или borderTop: '1px solid #000000' для толщины 1px
  

}}>
  <p style={{
  width: '646px',
  height: '48px', // Высота рассчитана ровно на 2 строки (24px * 2)
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '24px',
  marginLeft: '12px',
  color: '#000000',
  
  flex: 'none',
  order: 1, // Встанет вторым после разделителя
  flexGrow: 0,
  
  
}}>
  Каждый модуль разработан специалистами, которые работают с этими симптомами каждый день
</p>
</div>

<div style={{
  display: 'flex',
  flexDirection: 'row', // <-- Изменил с 'column' на 'row'
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '28px 27px 28px 28px',
  gap: '24px', // <-- Увеличил отступ между фото и текстом
  
  position: 'absolute',
  width: '693px',
  height: '189px',
  left: '162px',
  top: '328px',
  
  background: '#F4F5F0',
  borderRadius: '15px'
}}>

  <div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '16px',
  
  width: '622px',
  height: '133px',
  
  flex: 'none',
  order: 0,
  flexGrow: 0
}}>
  {/* Фото */}
  <div style={{
    width: '141px',
    height: '133px',
    backgroundImage: 'url("/ag.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '15px',
    flex: 'none',
    flexShrink: 0 // <-- Запрещаем фото сжиматься
  }} />
  
  {/* Текстовый блок (обёртка) */}
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', // <-- Отступ между именем и должностью
    flex: 1 // <-- Занимает всё оставшееся место
  }}>
    <div style={{
      fontFamily: "'Evolventa', sans-serif",
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '24px',
      color: '#3D1903',
      margin: 0
    }}>
      Андрей Гурвич
    </div>
    
    <p style={{
      fontFamily: "'Evolventa', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '24px',
      color: '#3D1903',
      margin: 0
    }}>
      Практикующий психолог
    </p>
  </div>
</div>
</div>



<div style={{
  display: 'flex',
  flexDirection: 'row', // <-- Изменил с 'column' на 'row'
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '28px 27px 28px 28px',
  gap: '10px', // <-- Увеличил отступ между фото и текстом
  
  position: 'absolute',
  width: '693px',
  height: '189px',
  left: '879px',
  top: '328px',
  
  background: '#F4F5F0',
  borderRadius: '15px'
}}>

  <div style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '16px',
  
  width: '622px',
  height: '133px',
  
  flex: 'none',
  order: 0,
  flexGrow: 0
}}>
  {/* Фото */}
  <div style={{
    width: '141px',
    height: '133px',
    backgroundImage: 'url("/up.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '15px',
    flex: 'none',
    flexShrink: 0 // <-- Запрещаем фото сжиматься
  }} />
  
  {/* Текстовый блок (обёртка) */}
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', // <-- Отступ между именем и должностью
    flex: 1 // <-- Занимает всё оставшееся место
  }}>
    <div style={{
      fontFamily: "'Evolventa', sans-serif",
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '24px',
      color: '#3D1903',
      margin: 0
    }}>
      Юлия Павлова
    </div>
    
    <p style={{
      fontFamily: "'Evolventa', sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '24px',
      color: '#3D1903',
      margin: 0
    }}>
      Практикующий психолог
    </p>
  </div>
</div>
</div>
  

</div>
</section>


{/* Кнопка в конце */}
<section style={{
  position: 'relative',
  padding: '0',
  backgroundImage: 'url("/endbutton.png")',
  width: '1734px',
  height: '419px',  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}}>
<div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 520px', maxWidth: '720px', minWidth: '320px' }}></div>
<h2 style={{
  position: 'absolute',
  width: '1018px',
  height: '40px',
  left: 'calc(50% - 1018px/2 - 127px)',
  top: '132px',
  
  fontFamily: "'Evolventa', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '40px',
  
  color: '#3D1903',
  margin: 0 // Сброс стандартных отступов браузера
}}>
  Начни с одного цветка — и посмотри, что
</h2>
<span style={{
  position: 'absolute',
  width: '247px',
  height: '40px',
  left: 'calc(50% - 247px/2 + 511.5px)',
  top: '155px',
  
  fontFamily: "'mr_GuardianCircusG', cursive",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '68px',
  lineHeight: '40px',
  
  // Градиентный текст
  background: 'linear-gradient(89.44deg, #3D1903 4.07%, #B87C57 104.06%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent', // Fallback для старых браузеров
  
  zIndex: 10,
  pointerEvents: 'none' // Чтобы сквозь элемент можно было кликать
}}>
  изменится
</span>
<button style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 24px',
  gap: '16px',
  
  position: 'absolute',
  width: '353px',
  height: '56px',
  left: 'calc(50% - 353px/2 + 0.5px)',
  top: '231px',
  
  background: '#3D1903',
  borderRadius: '38px',
  
  // Сброс стандартных стилей кнопки
  border: 'none',
  cursor: 'pointer',
  outline: 'none'
}}>
  {/* Вставь сюда текст или иконку кнопки */}
  <span style={{
    color: '#F4F5F0', // Светлый текст для контраста с темным фоном
    fontFamily: "'Evolventa', sans-serif",
    fontWeight: 500,
    fontSize: '18px'
  }}>
    Вырастить первый  цветок
  </span>
</button>

</div>
</section>

<section style={{ //footer
  position: 'relative',
  padding: '0',
  backgroundImage: 'url("/footer.png")',
  width: '1734px',
  height: '547px',  
  
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}}>
<div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
    <div style={{ flex: '1 1 520px', maxWidth: '720px', minWidth: '320px' }}></div>
<div style={{
  position: 'absolute',
  width: '198px',
  height: '76.59px', // Можно округлить до '77px'
  left: '164px',
  top: '145px',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
  <img 
    src="/flogo.png" // Замени на путь к твоему файлу логотипа
    alt="fLogo" 
    style={{
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain', // Сохраняет пропорции логотипа, не обрезая его
      display: 'block'
    }} 
  />
</div>

<div style={{
  position: 'absolute',
  width: '693px',
  height: '157px',
  left: '879px',
  top: '142px',
  
  backgroundImage: 'url("/fflowers.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  
  borderRadius: '15px'
}} />

{/* Пункт 1: О курсе */}
<div style={{
  position: 'absolute',
  width: '93px',
  height: '24px',
  left: '521px',
  top: '142px',
  
  fontFamily: "'Geometria', sans-serif",
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#FFFFFF',
  
  cursor: 'pointer', // Добавляем курсор руки, так как это ссылка/пункт меню
  userSelect: 'none' // Запрещаем выделение текста при клике
}}>
  О курсе
</div>

{/* Пункт 2: Симптомы */}
<div style={{
  position: 'absolute',
  width: '122px',
  height: '24px',
  left: '522px',
  top: '188px',
  
  fontFamily: "'Geometria', sans-serif",
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#FFFFFF',
  
  cursor: 'pointer',
  userSelect: 'none'
}}>
  Симптомы
</div>

{/* Пункт 3: Как это работает */}
<div style={{
  position: 'absolute',
  width: '201px',
  height: '24px',
  left: '521px',
  top: '234px',
  
  fontFamily: "'Geometria', sans-serif",
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#FFFFFF',
  
  cursor: 'pointer',
  userSelect: 'none'
}}>
  Как это работает
</div>

{/* Пункт 4: Специалисты */}
<div style={{
  position: 'absolute',
  width: '158px',
  height: '24px',
  left: '521px',
  top: '280px',
  
  fontFamily: "'Geometria', sans-serif",
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '24px',
  lineHeight: '24px',
  color: '#FFFFFF',
  
  cursor: 'pointer',
  userSelect: 'none'
}}>
  Специалисты
</div>

</div>
</section>



        <header 
  className="site-header" 
  style={{ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
    gap: '190px',
    position: 'fixed',
    width: '100%',
    maxWidth: '1409px',
    height: '98px',
    left: '50%',
    transform: 'translateX(-50%)',
    top: headerFixed ? '0' : '44px',
    background: '#FFFFFF',
    borderRadius: '15px',           // ← исправлено
    margin: '0 auto',
    boxSizing: 'border-box',
    boxShadow: headerFixed ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'all 0.3s ease',
  }}
>

  <div 
    className="page-container" 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      gap: 16, 
      padding: '0 20px',
      width: '100%',         // ← растягиваем на всю доступную ширину
      maxWidth: '1369px',    // ← 1409 - 20 - 20 (padding по бокам)
      margin: '0 auto',      // ← центрируем контент внутри
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <img 
        src="/logo.png" 
        alt="Выдох лого" 
        style={{ 
          width: 149, 
          height: 58, 
          marginLeft: 0,       // ← убрал -105px, это ломало всё
          display: 'block' 
        }} 
      />
    </div>

    <nav style={{ 
      display: 'flex', 
      gap: 0, 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      flex: 1,
      margin: '0 20px',      // ← отступы от краёв
    }}>
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className="nav-pill"
          style={{
            color: linkColor,
            background: pillBg,
            border: pillBorder,
          }}
        >
          {item}
        </a>
      ))}
    </nav>

    <a 
      href="#" 
      style={{
        textAlign: 'right',
        width: '198px',
        height: '21px',
        fontFamily: "'Evolventa', sans-serif",
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '21px',
        textDecorationLine: 'underline',
        color: '#111111',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        position: 'relative',  // ← вместо absolute
        right: 0,              // ← сброс
        top: 0,                // ← сброс
        transform: 'none',     // ← сброс
      }}
    >
      посадить первый цветок
    </a>
  </div>
</header>

        <a
          href="#"
          style={{
            position: 'absolute',
            top: '55%',
            right: '10%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: 220,
            height: 56,
            display: 'block',
            cursor: 'pointer',
          }}
          aria-label="Начать выращивать сад"
          />
      </div>

      <main style={{ position: 'relative', zIndex: 10, paddingTop: '80px' }}></main>

    </div>
  );
};

