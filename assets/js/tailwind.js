tailwind.config = {
    theme: {
      extend: {
        colors: {
          "capital-yellow": "000000", // Directly usable as `bg-capital-yellow`
        },
        spacing: {
          "4": "16px", // Now `p-4` will use 16px instead of 1rem
        },
      },
    },
  };