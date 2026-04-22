// src/theme.ts
export const vydohTheme = {
  token: {
    colorPrimary: '#7FB3A0',        // sage green
    colorBgContainer: '#F9F7F5',    // warm off-white
    colorText: '#3A3A3A',           // soft black
    borderRadius: 16,
    fontFamily: '"Manrope", "Inter", sans-serif',
  },
  components: {
    Button: {
      borderRadius: 24,             // pill shape
      paddingInline: 24,
      fontSize: 16,
    },
    Progress: {
      trailColor: '#E8E4E1',
      remainingColor: '#A8D5C4',    // softer green for "done"
    },
    // Card убрали — задаём стили напрямую в компоненте
  },
};