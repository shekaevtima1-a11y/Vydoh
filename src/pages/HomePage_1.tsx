import { useState } from 'react';
import { Button, Typography, Space } from 'antd';
import { vydohTheme } from '../theme';

const { Title, Text, Paragraph } = Typography;

// Компонент «Игровой уровень» с анимацией
const LevelBadge = ({ level }: { level: number }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 24px',
    background: `linear-gradient(135deg, ${vydohTheme.token.colorPrimary}20, ${vydohTheme.token.colorPrimary}05)`,
    borderRadius: 30,
    marginBottom: 16,
    border: `1.5px solid ${vydohTheme.token.colorPrimary}40`,
    animation: 'slideInDown 0.6s ease-out',
  }}>
    <div style={{
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${vydohTheme.token.colorPrimary}, #A8D5C4)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700,
      fontSize: 18,
    }}>
      {level}
    </div>
    <Text style={{ fontWeight: 600, color: vydohTheme.token.colorText, fontSize: 15 }}>
      Уровень {level}
    </Text>
  </div>
);

// Компонент «Ежедневное задание» с hover эффектом и кликом
const DailyQuest = ({ 
  title, 
  description, 
  icon, 
  completed,
  index,
  onToggle,
}: { 
  title: string; 
  description: string; 
  icon: string;
  completed: boolean;
  index: number;
  onToggle: () => void;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 20,
        background: completed 
          ? `linear-gradient(135deg, ${vydohTheme.token.colorPrimary}15, ${vydohTheme.token.colorPrimary}05)`
          : '#fff',
        borderRadius: 18,
        border: completed ? `2px solid ${vydohTheme.token.colorPrimary}` : '1px solid #E8E4E1',
        boxShadow: hover 
          ? `0 8px 24px rgba(127, 179, 160, 0.2)` 
          : `0 2px 8px rgba(0,0,0,0.04)`,
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ 
          fontSize: 40, 
          transform: hover ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}>
          {icon}
        </span>
        <div style={{ flex: 1 }}>
          <Title level={5} style={{ 
            margin: '0 0 4px 0', 
            color: vydohTheme.token.colorText,
            fontSize: 16,
          }}>
            {title}
          </Title>
          <Text type="secondary" style={{ fontSize: 13, opacity: 0.7 }}>
            {description}
          </Text>
        </div>
        {completed && (
          <div style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: vydohTheme.token.colorPrimary,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: 18,
            animation: 'scaleIn 0.5s ease-out',
          }}>
            ✓
          </div>
        )}
      </div>
    </div>
  );
};

// Компонент «Навык» с прогресс-баром
const SkillNode = ({ 
  name, 
  progress, 
  icon,
  index,
}: { 
  name: string; 
  progress: number;
  icon: string;
  index: number;
}) => (
  <div style={{
    padding: 18,
    background: '#fff',
    borderRadius: 16,
    border: '1px solid #E8E4E1',
    marginBottom: 12,
    width: '100%',
    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <span style={{ fontSize: 28 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <Text strong style={{ color: vydohTheme.token.colorText, fontSize: 15 }}>
          {name}
        </Text>
      </div>
      <Text style={{ color: vydohTheme.token.colorPrimary, fontWeight: 600 }}>
        {progress}%
      </Text>
    </div>
    <div style={{
      width: '100%',
      height: 6,
      background: '#E8E4E1',
      borderRadius: 10,
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: `linear-gradient(90deg, ${vydohTheme.token.colorPrimary}, #A8D5C4)`,
        borderRadius: 10,
        transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }} />
    </div>
  </div>
);

// Компонент волнистой линии
const WaveDecoration = () => (
  <svg
    viewBox="0 0 1440 80"
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      marginBottom: -4,
      animation: 'wave 8s ease-in-out infinite',
    }}
    preserveAspectRatio="none"
  >
    <path
      d="M0,40 Q360,10 720,40 T1440,40"
      stroke={vydohTheme.token.colorPrimary}
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// Компонент красивой шапки
const HeaderSection = () => (
  <div style={{
    background: `linear-gradient(135deg, ${vydohTheme.token.colorPrimary}15, ${vydohTheme.token.colorPrimary}08)`,
    borderRadius: 24,
    padding: '48px 32px',
    marginBottom: 32,
    border: `1.5px solid ${vydohTheme.token.colorPrimary}30`,
    boxShadow: '0 8px 32px rgba(127, 179, 160, 0.12)',
    textAlign: 'center',
    animation: 'slideInDown 0.7s ease-out',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Декоративный элемент */}
    <div style={{
      position: 'absolute',
      top: -50,
      right: -50,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${vydohTheme.token.colorPrimary}20 0%, transparent 70%)`,
      pointerEvents: 'none',
    }} />
    
    <div style={{
      fontSize: 64,
      marginBottom: 20,
      animation: 'float 3s ease-in-out infinite',
    }}>
      🌿
    </div>

    <Title level={1} style={{
      color: vydohTheme.token.colorText,
      margin: '0 0 12px 0',
      fontSize: 42,
      fontWeight: 800,
      background: `linear-gradient(135deg, ${vydohTheme.token.colorPrimary}, #A8D5C4)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      Выдох
    </Title>

    <Paragraph style={{
      color: `${vydohTheme.token.colorText}80`,
      margin: '0 0 24px 0',
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      Практика личных границ и самооценки через игровые механики. Начни сегодня, развивайся каждый день.
    </Paragraph>

    <div style={{
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap',
    }}>
      <div style={{
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 600,
        color: vydohTheme.token.colorText,
        border: `1px solid ${vydohTheme.token.colorPrimary}40`,
      }}>
        ✨ Бесплатно
      </div>
      <div style={{
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 600,
        color: vydohTheme.token.colorText,
        border: `1px solid ${vydohTheme.token.colorPrimary}40`,
      }}>
        🎮 Геймифицировано
      </div>
      <div style={{
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        fontSize: 13,
        fontWeight: 600,
        color: vydohTheme.token.colorText,
        border: `1px solid ${vydohTheme.token.colorPrimary}40`,
      }}>
        💚 На себя
      </div>
    </div>
  </div>
);

export const HomePage = () => {
  const userLevel = 3;
  const weeklyProgress = 4;
  
  // State для выбранных заданий
  const [completedQuests, setCompletedQuests] = useState<Record<string, boolean>>({
    quest1: true,
    quest2: false,
    quest3: false,
  });

  // Функция для переключения состояния задания
  const toggleQuest = (questId: string) => {
    setCompletedQuests(prev => ({
      ...prev,
      [questId]: !prev[questId]
    }));
  };

  // Подсчет выполненных заданий
  const completedToday = Object.values(completedQuests).filter(Boolean).length;

  return (
    <div style={{
      padding: 0,
      background: `linear-gradient(180deg, ${vydohTheme.token.colorBgContainer} 0%, #F5F3F1 100%)`,
      minHeight: '100vh',
      fontFamily: vydohTheme.token.fontFamily,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
        }
      `}</style>

      {/* Волнистая линия в самом верху */}
      <WaveDecoration />

      <div style={{
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Space direction="vertical" size={32} style={{ 
          width: '100%', 
          maxWidth: 600,
          alignItems: 'center',
        }}>

          {/* ✨ Красивая шапка */}
          <HeaderSection />

          {/* Уровень */}
          <div style={{ width: '100%', textAlign: 'center' }}>
            <LevelBadge level={userLevel} />
          </div>

          {/* Недельный прогресс */}
          <div style={{
            borderRadius: 20,
            border: 'none',
            boxShadow: '0 8px 24px rgba(127, 179, 160, 0.12)',
            background: 'linear-gradient(135deg, #fff, #FAFAF8)',
            width: '100%',
            padding: 24,
            animation: 'slideInUp 0.6s ease-out 0.1s both',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Text style={{ fontWeight: 600, color: vydohTheme.token.colorText, fontSize: 15 }}>
                Недельная практика
              </Text>
              <Text style={{ color: vydohTheme.token.colorPrimary, fontWeight: 700 }}>
                {weeklyProgress}/7
              </Text>
            </div>
            <div style={{
              width: '100%',
              height: 8,
              background: '#E8E4E1',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${(weeklyProgress / 7) * 100}%`,
                background: `linear-gradient(90deg, ${vydohTheme.token.colorPrimary}, #A8D5C4)`,
                borderRadius: 10,
                transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
              }} />
            </div>
            <Text type="secondary" style={{ fontSize: 13, marginTop: 12, display: 'block' }}>
              {weeklyProgress >= 5 
                ? '✨ Отлично! Ты заботишься о себе регулярно' 
                : '💚 Ещё немного до цели'}
            </Text>
          </div>

          {/* Ежедневные задания */}
          <div style={{ width: '100%' }}>
            <Title level={5} style={{ 
              color: vydohTheme.token.colorText, 
              marginBottom: 16,
              fontSize: 18,
            }}>
              Сегодня ({completedToday}/3)
            </Title>
            <Space direction="vertical" size={12} style={{ width: '100%' }}>
              <DailyQuest 
                icon="🎯"
                title="Скажи «нет» без оправданий"
                description="Практика: откажи в маленькой просьбе"
                completed={completedQuests.quest1}
                index={0}
                onToggle={() => toggleQuest('quest1')}
              />
              <DailyQuest 
                icon="💬"
                title="Озвучь свою потребность"
                description="Тест: определи, что тебе нужно сейчас"
                completed={completedQuests.quest2}
                index={1}
                onToggle={() => toggleQuest('quest2')}
              />
              <DailyQuest 
                icon="🌱"
                title="5 минут на себя"
                description="Задание: дыхательная практика"
                completed={completedQuests.quest3}
                index={2}
                onToggle={() => toggleQuest('quest3')}
              />
            </Space>
          </div>

          {/* Дерево навыков */}
          <div style={{
            borderRadius: 20,
            border: 'none',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            background: '#fff',
            width: '100%',
            padding: 24,
            animation: 'slideInUp 0.6s ease-out 0.3s both',
          }}>
            <Title level={5} style={{ 
              color: vydohTheme.token.colorText, 
              marginBottom: 20,
              fontSize: 18,
            }}>
              Твои навыки 🌳
            </Title>
            <Space direction="vertical" style={{ width: '100%' }} size={0}>
              <SkillNode 
                icon="🚧"
                name="Личные границы"
                progress={65}
                index={0}
              />
              <SkillNode 
                icon="💪"
                name="Умение говорить «нет»"
                progress={40}
                index={1}
              />
              <SkillNode 
                icon="💖"
                name="Самооценка"
                progress={55}
                index={2}
              />
            </Space>
          </div>

          {/* Главная кнопка CTA */}
          <Button 
            type="primary" 
            size="large"
            style={{
              width: '100%',
              maxWidth: 400,
              height: 56,
              fontSize: 16,
              fontWeight: 600,
              borderRadius: 28,
              background: `linear-gradient(135deg, ${vydohTheme.token.colorPrimary}, #A8D5C4)`,
              border: 'none',
              boxShadow: '0 8px 24px rgba(127, 179, 160, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              animation: 'slideInUp 0.6s ease-out 0.4s both',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(127, 179, 160, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(127, 179, 160, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Начать следующее задание 🚀
          </Button>

        </Space>
      </div>
    </div>
  );
};