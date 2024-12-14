console.log("Content script is loaded and ready to receive messages.");

const themeColors = {
  1: {},
  2: {
    theme: {
      "--main-surface-background": "#EFE2F9",
      "--message-surface": "#D6B1F0",
      "--dot-color": "#FA90C6",
      "--text-primary": "#4E0533",
      "--text-secondary": "#85105A",
      "--text-tertiary": "#A100A1",
      "--text-quaternary": "#DC00DC",
      "--text-placeholder": "#FFADFF",
      "--text-error": "#FCCDE2",
      "--border-xlight": "#FFE9FF",
      "--border-light": "#EFE2F9",
      "--border-medium": "#D6B1F0",
      "--border-heavy": "#BF7DE7",
      "--border-xheavy": "#A745D6",
      "--border-sharp": "#762F99",
      "--main-surface-primary": "#FFADFF",
      "--main-surface-primary-inverse": "#4E0533",
      "--main-surface-secondary": "#EFE2F9",
      "--main-surface-tertiary": "#DC00DC",
      "--sidebar-surface-primary": "#EFE2F9",
      "--sidebar-surface-secondary": "#EFE2F9",
      "--sidebar-surface-tertiary": "#D6B1F0",
      "--sidebar-title-primary": "#4E0533",
      "--sidebar-body-primary": "#85105A",
      "--sidebar-icon": "#A100A1",
      "--link": "#FCCDE2",
      "--link-hover": "#FA90C6",
      "--surface-error": "#FCCDE2",
    },
    root: {
      "--gray-100": "#4E0533",
      "--gray-700": "#FA90C6",
    },
  },
  3: {
    theme: {
      "--main-surface-background": "#FFFDFA",
      "--message-surface": "#FCDBDB",
      "--dot-color": "#FB9696",
      "--text-primary": "#540604",
      "--text-secondary": "#8E100D",
      "--text-tertiary": "#C64800",
      "--text-quaternary": "#FF6820",
      "--text-placeholder": "#FFA896",
      "--text-error": "#FDCFCF",
      "--border-xlight": "#FFE7E9",
      "--border-light": "#FCDBDB",
      "--border-medium": "#FAAA44",
      "--border-heavy": "#F86363",
      "--border-xheavy": "#DB1F1F",
      "--border-sharp": "#9B1313",
      "--main-surface-primary": "#FFA896",
      "--main-surface-primary-inverse": "#540604",
      "--main-surface-secondary": "#FFFDFA",
      "--main-surface-tertiary": "#FF6820",
      "--sidebar-surface-primary": "#FFFDFA",
      "--sidebar-surface-secondary": "#FCDBDB",
      "--sidebar-surface-tertiary": "#FAAA44",
      "--sidebar-title-primary": "#540604",
      "--sidebar-body-primary": "#8E100D",
      "--sidebar-icon": "#C64800",
      "--link": "#FDCFCF",
      "--link-hover": "#FB9696",
      "--surface-error": "#FDCFCF",
    },
    root: {
      "--gray-100": "#540604",
      "--gray-700": "#FB9696",
    },
  },
  4: {
    theme: {
      "--main-surface-background": "#FFC4FB",
      "--message-surface": "#F0CEED",
      "--dot-color": "#FF8EF4",
      "--text-primary": "#52004C",
      "--text-secondary": "#880080",
      "--text-tertiary": "#7D0078",
      "--text-quaternary": "#B700B0",
      "--text-placeholder": "#F400EB",
      "--text-error": "#FFD0FA",
      "--border-xlight": "#FEE2FE",
      "--border-light": "#F0CEED",
      "--border-medium": "#E199DC",
      "--border-heavy": "#CC63C6",
      "--border-xheavy": "#994894",
      "--border-sharp": "#692F65",
      "--main-surface-primary": "#F400EB",
      "--main-surface-primary-inverse": "#52004C",
      "--main-surface-secondary": "#FFC4FB",
      "--main-surface-tertiary": "#B700B0",
      "--sidebar-surface-primary": "#FFC4FB",
      "--sidebar-surface-secondary": "#F0CEED",
      "--sidebar-surface-tertiary": "#E199DC",
      "--sidebar-title-primary": "#52004C",
      "--sidebar-body-primary": "#880080",
      "--sidebar-icon": "#7D0078",
      "--link": "#FFD0FA",
      "--link-hover": "#FF8EF4",
      "--surface-error": "#FFD0FA",
    },
    root: {
      "--gray-100": "#52004C",
      "--gray-700": "#FF8EF4",
    },
  },
  5: {
    theme: {
      "--main-surface-background": "#FEDDE2",
      "--message-surface": "#FCD9DD",
      "--dot-color": "#FFB78C",
      "--text-primary": "#790019",
      "--text-secondary": "#B7002C",
      "--text-tertiary": "#DD1760",
      "--text-quaternary": "#FB6188",
      "--text-placeholder": "#FCA5B6",
      "--text-error": "#FFECED",
      "--border-xlight": "#FFD4D8",
      "--border-light": "#FCD9DD",
      "--border-medium": "#FAA1AC",
      "--border-heavy": "#F85F79",
      "--border-xheavy": "#D6204E",
      "--border-sharp": "#971335",
      "--main-surface-primary": "#FCA5B6",
      "--main-surface-primary-inverse": "#790019",
      "--main-surface-secondary": "#FEDDE2",
      "--main-surface-tertiary": "#FB6188",
      "--sidebar-surface-primary": "#FEDDE2",
      "--sidebar-surface-secondary": "#FCD9DD",
      "--sidebar-surface-tertiary": "#FAA1AC",
      "--sidebar-title-primary": "#790019",
      "--sidebar-body-primary": "#B7002C",
      "--sidebar-icon": "#DD1760",
      "--link": "#FFECED",
      "--link-hover": "#FFB78C",
      "--surface-error": "#FFECED",
    },
    root: {
      "--gray-100": "#790019",
      "--gray-700": "#FFB78C",
    },
  },
  6: {
    theme: {
      "--main-surface-background": "#E9DDD4",
      "--message-surface": "#EFE7E0",
      "--dot-color": "#E5AC5F",
      "--text-primary": "#5E4523",
      "--text-secondary": "#896635",
      "--text-tertiary": "#54493E",
      "--text-quaternary": "#7A6A5C",
      "--text-placeholder": "#CDB39C",
      "--text-error": "#F7D9BC",
      "--border-xlight": "#D5ECD8",
      "--border-light": "#EFE7E0",
      "--border-medium": "#D6BCA3",
      "--border-heavy": "#AB9682",
      "--border-xheavy": "#827262",
      "--border-sharp": "#5C5044",
      "--main-surface-primary": "#CDB39C",
      "--main-surface-primary-inverse": "#5E4523",
      "--main-surface-secondary": "#E9DDD4",
      "--main-surface-tertiary": "#7A6A5C",
      "--sidebar-surface-primary": "#E9DDD4",
      "--sidebar-surface-secondary": "#EFE7E0",
      "--sidebar-surface-tertiary": "#D6BCA3",
      "--sidebar-title-primary": "#5E4523",
      "--sidebar-body-primary": "#896635",
      "--sidebar-icon": "#54493E",
      "--link": "#F7D9BC",
      "--link-hover": "#E5AC5F",
      "--surface-error": "#F7D9BC",
    },
    root: {
      "--gray-100": "#5E4523",
      "--gray-700": "#E5AC5F",
    },
  },
  7: {
    theme: {
      "--main-surface-background": "#FDEEE8",
      "--message-surface": "#F7D8BD",
      "--dot-color": "#FFA78F",
      "--text-primary": "#531F01",
      "--text-secondary": "#873701",
      "--text-tertiary": "#8C4C1F",
      "--text-quaternary": "#BF6A2E",
      "--text-placeholder": "#F5893E",
      "--text-error": "#FFDED7",
      "--border-xlight": "#EFD3C4",
      "--border-light": "#F7D8BD",
      "--border-medium": "#CEB360",
      "--border-heavy": "#A48E4B",
      "--border-xheavy": "#7B6A36",
      "--border-sharp": "#544823",
      "--main-surface-primary": "#F5893E",
      "--main-surface-primary-inverse": "#531F01",
      "--main-surface-secondary": "#FDEEE8",
      "--main-surface-tertiary": "#BF6A2E",
      "--sidebar-surface-primary": "#FDEEE8",
      "--sidebar-surface-secondary": "#F7D8BD",
      "--sidebar-surface-tertiary": "#CEB360",
      "--sidebar-title-primary": "#531F01",
      "--sidebar-body-primary": "#873701",
      "--sidebar-icon": "#8C4C1F",
      "--link": "#FFDED7",
      "--link-hover": "#FFA78F",
      "--surface-error": "#FFDED7",
    },
    root: {
      "--gray-100": "#531F01",
      "--gray-700": "#FFA78F",
    },
  },
  8: {
    theme: {
      "--main-surface-background": "#FFCCC4",
      "--message-surface": "#FFDCD6",
      "--dot-color": "#FFA08E",
      "--text-primary": "#531800",
      "--text-secondary": "#882D00",
      "--text-tertiary": "#B34100",
      "--text-quaternary": "#EF5900",
      "--text-placeholder": "#FF937B",
      "--text-error": "#FFD7D2",
      "--border-xlight": "#FFEBE7",
      "--border-light": "#FFDCD6",
      "--border-medium": "#FFA592",
      "--border-heavy": "#FF6302",
      "--border-xheavy": "#C34A00",
      "--border-sharp": "#8A3200",
      "--main-surface-primary": "#FF937B",
      "--main-surface-primary-inverse": "#531800",
      "--main-surface-secondary": "#FFCCC4",
      "--main-surface-tertiary": "#EF5900",
      "--sidebar-surface-primary": "#FFCCC4",
      "--sidebar-surface-secondary": "#FFDCD6",
      "--sidebar-surface-tertiary": "#FFA592",
      "--sidebar-title-primary": "#531800",
      "--sidebar-body-primary": "#882D00",
      "--sidebar-icon": "#B34100",
      "--link": "#FFD7D2",
      "--link-hover": "#FFA08E",
      "--surface-error": "#FFD7D2",
    },
    root: {
      "--gray-100": "#531800",
      "--gray-700": "#FFA08E",
    },
  },
  9: {
    theme: {
      "--main-surface-background": "#FFF39C",
      "--message-surface": "#FEF39F",
      "--dot-color": "#D4C400",
      "--text-primary": "#5C5500",
      "--text-secondary": "#827800",
      "--text-tertiary": "#625B0A",
      "--text-quaternary": "#B1A51A",
      "--text-placeholder": "#DBCC23",
      "--text-error": "#FFED29",
      "--border-xlight": "#EDDC3F",
      "--border-light": "#FEF39F",
      "--border-medium": "#DDCD2A",
      "--border-heavy": "#B2A620",
      "--border-xheavy": "#8A8016",
      "--border-sharp": "#645C0D",
      "--main-surface-primary": "#DBCC23",
      "--main-surface-primary-inverse": "#5C5500",
      "--main-surface-secondary": "#FFF39C",
      "--main-surface-tertiary": "#B1A51A",
      "--sidebar-surface-primary": "#FFF39C",
      "--sidebar-surface-secondary": "#FEF39F",
      "--sidebar-surface-tertiary": "#DDCD2A",
      "--sidebar-title-primary": "#5C5500",
      "--sidebar-body-primary": "#827800",
      "--sidebar-icon": "#625B0A",
      "--link": "#FFED29",
      "--link-hover": "#D4C400",
      "--surface-error": "#FFED29",
    },
    root: {
      "--gray-100": "#5C5500",
      "--gray-700": "#D4C400",
    },
  },
  10: {
    theme: {
      "--main-surface-background": "#FFEFDA",
      "--message-surface": "#FFD490",
      "--dot-color": "#FFCE1B",
      "--text-primary": "#796000",
      "--text-secondary": "#A48300",
      "--text-tertiary": "#7F5E00",
      "--text-quaternary": "#AC8000",
      "--text-placeholder": "#DBA400",
      "--text-error": "#FFEFD2",
      "--border-xlight": "#FFDDA4",
      "--border-light": "#FFD490",
      "--border-medium": "#E2AA00",
      "--border-heavy": "#B38600",
      "--border-xheavy": "#866300",
      "--border-sharp": "#5C4300",
      "--main-surface-primary": "#DBA400",
      "--main-surface-primary-inverse": "#796000",
      "--main-surface-secondary": "#FFEFDA",
      "--main-surface-tertiary": "#AC8000",
      "--sidebar-surface-primary": "#FFEFDA",
      "--sidebar-surface-secondary": "#FFD490",
      "--sidebar-surface-tertiary": "#E2AA00",
      "--sidebar-title-primary": "#796000",
      "--sidebar-body-primary": "#A48300",
      "--sidebar-icon": "#7F5E00",
      "--link": "#FFEFD2",
      "--link-hover": "#FFCE1B",
      "--surface-error": "#FFEFD2",
    },
    root: {
      "--gray-100": "#796000",
      "--gray-700": "#FFCE1B",
    },
  },
  11: {
    theme: {
      "--main-surface-background": "#EDD77F",
      "--message-surface": "#FFD889",
      "--dot-color": "#EFBF04",
      "--text-primary": "#6A5301",
      "--text-secondary": "#947501",
      "--text-tertiary": "#71663A",
      "--text-quaternary": "#998A50",
      "--text-placeholder": "#C28067",
      "--text-error": "#FFEBC6",
      "--border-xlight": "#FFEABB",
      "--border-light": "#FFD889",
      "--border-medium": "#DEB300",
      "--border-heavy": "#B08D00",
      "--border-xheavy": "#856A00",
      "--border-sharp": "#5C4900",
      "--main-surface-primary": "#C28067",
      "--main-surface-primary-inverse": "#6A5301",
      "--main-surface-secondary": "#EDD77F",
      "--main-surface-tertiary": "#998A50",
      "--sidebar-surface-primary": "#EDD77F",
      "--sidebar-surface-secondary": "#FFD889",
      "--sidebar-surface-tertiary": "#DEB300",
      "--sidebar-title-primary": "#6A5301",
      "--sidebar-body-primary": "#947501",
      "--sidebar-icon": "#71663A",
      "--link": "#FFEBC6",
      "--link-hover": "#EFBF04",
      "--surface-error": "#FFEBC6",
    },
    root: {
      "--gray-100": "#6A5301",
      "--gray-700": "#EFBF04",
    },
  },
  12: {
    theme: {
      "--main-surface-background": "#CEFAF1",
      "--message-surface": "#AFFFFA",
      "--dot-color": "#00CEC8",
      "--text-primary": "#005553",
      "--text-secondary": "#007B78",
      "--text-tertiary": "#4F887E",
      "--text-quaternary": "#67B0A3",
      "--text-placeholder": "#81DACA",
      "--text-error": "#00FAF3",
      "--border-xlight": "#00F8F0",
      "--border-light": "#AFFFFA",
      "--border-medium": "#00E4DD",
      "--border-heavy": "#00B9B3",
      "--border-xheavy": "#00908B",
      "--border-sharp": "#006865",
      "--main-surface-primary": "#81DACA",
      "--main-surface-primary-inverse": "#005553",
      "--main-surface-secondary": "#CEFAF1",
      "--main-surface-tertiary": "#67B0A3",
      "--sidebar-surface-primary": "#CEFAF1",
      "--sidebar-surface-secondary": "#AFFFFA",
      "--sidebar-surface-tertiary": "#00E4DD",
      "--sidebar-title-primary": "#005553",
      "--sidebar-body-primary": "#007B78",
      "--sidebar-icon": "#4F887E",
      "--link": "#00FAF3",
      "--link-hover": "#00CEC8",
      "--surface-error": "#00FAF3",
    },
    root: {
      "--gray-100": "#005553",
      "--gray-700": "#00CEC8",
    },
  },
  13: {
    theme: {
      "--main-surface-background": "#C1E1C4",
      "--message-surface": "#D8F7DA",
      "--dot-color": "#8DC192",
      "--text-primary": "#374E39",
      "--text-secondary": "#527255",
      "--text-tertiary": "#5B685D",
      "--text-quaternary": "#7C917E",
      "--text-placeholder": "#9EB8A0",
      "--text-error": "#ADEBB3",
      "--border-xlight": "#7FFA89",
      "--border-light": "#D8F7DA",
      "--border-medium": "#91D797",
      "--border-heavy": "#74AD79",
      "--border-xheavy": "#58855C",
      "--border-sharp": "#3E5F41",
      "--main-surface-primary": "#9EB8A0",
      "--main-surface-primary-inverse": "#374E39",
      "--main-surface-secondary": "#C1E1C4",
      "--main-surface-tertiary": "#7C917E",
      "--sidebar-surface-primary": "#C1E1C4",
      "--sidebar-surface-secondary": "#D8F7DA",
      "--sidebar-surface-tertiary": "#91D797",
      "--sidebar-title-primary": "#374E39",
      "--sidebar-body-primary": "#527255",
      "--sidebar-icon": "#5B685D",
      "--link": "#ADEBB3",
      "--link-hover": "#8DC192",
      "--surface-error": "#ADEBB3",
    },
    root: {
      "--gray-100": "#374E39",
      "--gray-700": "#8DC192",
    },
  },
  14: {
    theme: {
      "--main-surface-background": "#CCFFCC",
      "--message-surface": "#CFFFCF",
      "--dot-color": "#00D600",
      "--text-primary": "#005800",
      "--text-secondary": "#008000",
      "--text-tertiary": "#009200",
      "--text-quaternary": "#00BD00",
      "--text-placeholder": "#00EA00",
      "--text-error": "#59FF59",
      "--border-xlight": "#CBFECB",
      "--border-light": "#CFFFCF",
      "--border-medium": "#5CE65C",
      "--border-heavy": "#49BA49",
      "--border-xheavy": "#379037",
      "--border-sharp": "#256825",
      "--main-surface-primary": "#00EA00",
      "--main-surface-primary-inverse": "#005800",
      "--main-surface-secondary": "#CCFFCC",
      "--main-surface-tertiary": "#00BD00",
      "--sidebar-surface-primary": "#CCFFCC",
      "--sidebar-surface-secondary": "#CFFFCF",
      "--sidebar-surface-tertiary": "#5CE65C",
      "--sidebar-title-primary": "#005800",
      "--sidebar-body-primary": "#008000",
      "--sidebar-icon": "#009200",
      "--link": "#59FF59",
      "--link-hover": "#00D600",
      "--surface-error": "#59FF59",
    },
    root: {
      "--gray-100": "#005800",
      "--gray-700": "#00D600",
    },
  },
  15: {
    theme: {
      "--main-surface-background": "#E8F2FE",
      "--message-surface": "#E5E8FC",
      "--dot-color": "#A1ADF5",
      "--text-primary": "#1E3D9A",
      "--text-secondary": "#305CDE",
      "--text-tertiary": "#308FCA",
      "--text-quaternary": "#59B5F7",
      "--text-placeholder": "#B7D8FB",
      "--text-error": "#D2D6FA",
      "--border-xlight": "#E6E9FB",
      "--border-light": "#E5E8FC",
      "--border-medium": "#B5BEF6",
      "--border-heavy": "#8395F1",
      "--border-xheavy": "#486CE9",
      "--border-sharp": "#274AB3",
      "--main-surface-primary": "#B7D8FB",
      "--main-surface-primary-inverse": "#1E3D9A",
      "--main-surface-secondary": "#E8F2FE",
      "--main-surface-tertiary": "#59B5F7",
      "--sidebar-surface-primary": "#E8F2FE",
      "--sidebar-surface-secondary": "#E5E8FC",
      "--sidebar-surface-tertiary": "#B5BEF6",
      "--sidebar-title-primary": "#1E3D9A",
      "--sidebar-body-primary": "#305CDE",
      "--sidebar-icon": "#308FCA",
      "--link": "#D2D6FA",
      "--link-hover": "#A1ADF5",
      "--surface-error": "#D2D6FA",
    },
    root: {
      "--gray-100": "#1E3D9A",
      "--gray-700": "#A1ADF5",
    },
  },
  16: {
    theme: {
      "--main-surface-background": "#DFEBF0",
      "--message-surface": "#D8ECF7",
      "--dot-color": "#82C8E5",
      "--text-primary": "#355562",
      "--text-secondary": "#4D798C",
      "--text-tertiary": "#637983",
      "--text-quaternary": "#829FAB",
      "--text-placeholder": "#A3C7D5",
      "--text-error": "#D4EAF5",
      "--border-xlight": "#BEE0F2",
      "--border-light": "#D8ECF7",
      "--border-medium": "#84CAE9",
      "--border-heavy": "#65A2BC",
      "--border-xheavy": "#4C7C90",
      "--border-sharp": "#345766",
      "--main-surface-primary": "#A3C7D5",
      "--main-surface-primary-inverse": "#355562",
      "--main-surface-secondary": "#DFEBF0",
      "--main-surface-tertiary": "#829FAB",
      "--sidebar-surface-primary": "#DFEBF0",
      "--sidebar-surface-secondary": "#D8ECF7",
      "--sidebar-surface-tertiary": "#84CAE9",
      "--sidebar-title-primary": "#355562",
      "--sidebar-body-primary": "#4D798C",
      "--sidebar-icon": "#637983",
      "--link": "#D4EAF5",
      "--link-hover": "#82C8E5",
      "--surface-error": "#D4EAF5",
    },
    root: {
      "--gray-100": "#355562",
      "--gray-700": "#82C8E5",
    },
  },
  17: {
    theme: {
      "--main-surface-background": "#AEFFFF",
      "--message-surface": "#AEFFFF",
      "--dot-color": "#20E8E8",
      "--text-primary": "#09666C",
      "--text-secondary": "#109393",
      "--text-tertiary": "#046F6F",
      "--text-quaternary": "#0DC0C0",
      "--text-placeholder": "#13BEBB",
      "--text-error": "#AFFFFF",
      "--border-xlight": "#B0FFFF",
      "--border-light": "#AEFFFF",
      "--border-medium": "#16EDED",
      "--border-heavy": "#10C2C2",
      "--border-xheavy": "#0A9898",
      "--border-sharp": "#057171",
      "--main-surface-primary": "#13BEBB",
      "--main-surface-primary-inverse": "#09666C",
      "--main-surface-secondary": "#AEFFFF",
      "--main-surface-tertiary": "#0DC0C0",
      "--sidebar-surface-primary": "#AEFFFF",
      "--sidebar-surface-secondary": "#AEFFFF",
      "--sidebar-surface-tertiary": "#16EDED",
      "--sidebar-title-primary": "#09666C",
      "--sidebar-body-primary": "#109393",
      "--sidebar-icon": "#046F6F",
      "--link": "#AFFFFF",
      "--link-hover": "#20E8E8",
      "--surface-error": "#AFFFFF",
    },
    root: {
      "--gray-100": "#09666C",
      "--gray-700": "#20E8E8",
    },
  },
  18: {
    theme: {
      "--main-surface-background": "#E2CFFF",
      "--message-surface": "#F3EEFF",
      "--dot-color": "#DC69FF",
      "--text-primary": "#7F00FF",
      "--text-secondary": "#9864FF",
      "--text-tertiary": "#9A00F3",
      "--text-quaternary": "#B163FF",
      "--text-placeholder": "#C89DFF",
      "--text-error": "#F2FFFF",
      "--border-xlight": "#F1F0F1",
      "--border-light": "#F3EEFF",
      "--border-medium": "#D4C1FA",
      "--border-heavy": "#B691F6",
      "--border-xheavy": "#9C5BF1",
      "--border-sharp": "#7D25D3",
      "--main-surface-primary": "#C89DFF",
      "--main-surface-primary-inverse": "#7F00FF",
      "--main-surface-secondary": "#E2CFFF",
      "--main-surface-tertiary": "#B163FF",
      "--sidebar-surface-primary": "#E2CFFF",
      "--sidebar-surface-secondary": "#F3EEFF",
      "--sidebar-surface-tertiary": "#D4C1FA",
      "--sidebar-title-primary": "#7F00FF",
      "--sidebar-body-primary": "#9864FF",
      "--sidebar-icon": "#9A00F3",
      "--link": "#F2FFFF",
      "--link-hover": "#DC69FF",
      "--surface-error": "#F2FFFF",
    },
    root: {
      "--gray-100": "#7F00FF",
      "--gray-700": "#DC69FF",
    },
  },
  19: {
    theme: {
      "--main-surface-background": "#F2DAEE",
      "--message-surface": "#F1D4EA",
      "--dot-color": "#EBC5E5",
      "--text-primary": "#8E4585",
      "--text-secondary": "#C160B5",
      "--text-tertiary": "#A35098",
      "--text-quaternary": "#D270C5",
      "--text-placeholder": "#E2A7D9",
      "--text-error": "#F9EDF7",
      "--border-xlight": "#F3E8F5",
      "--border-light": "#F1D4EA",
      "--border-medium": "#E2A0D3",
      "--border-heavy": "#D367BE",
      "--border-xheavy": "#A04B90",
      "--border-sharp": "#6F3263",
      "--main-surface-primary": "#E2A7D9",
      "--main-surface-primary-inverse": "#8E4585",
      "--main-surface-secondary": "#F2DAEE",
      "--main-surface-tertiary": "#D270C5",
      "--sidebar-surface-primary": "#F2DAEE",
      "--sidebar-surface-secondary": "#F1D4EA",
      "--sidebar-surface-tertiary": "#E2A0D3",
      "--sidebar-title-primary": "#8E4585",
      "--sidebar-body-primary": "#C160B5",
      "--sidebar-icon": "#A35098",
      "--link": "#F9EDF7",
      "--link-hover": "#EBC5E5",
      "--surface-error": "#F9EDF7",
    },
    root: {
      "--gray-100": "#8E4585",
      "--gray-700": "#EBC5E5",
    },
  },
  20: {
    theme: {
      "--main-surface-background": "#E9D9F9",
      "--message-surface": "#E7DBFF",
      "--dot-color": "#D6BFFE",
      "--text-primary": "#560591",
      "--text-secondary": "#840CDB",
      "--text-tertiary": "#9D3ED2",
      "--text-quaternary": "#B874E8",
      "--text-placeholder": "#CFA8F1",
      "--text-error": "#F4EFFF",
      "--border-xlight": "#F3EBFE",
      "--border-light": "#E7DBFF",
      "--border-medium": "#CAAAFF",
      "--border-heavy": "#B075FF",
      "--border-xheavy": "#9B28FF",
      "--border-sharp": "#7000BF",
      "--main-surface-primary": "#CFA8F1",
      "--main-surface-primary-inverse": "#560591",
      "--main-surface-secondary": "#E9D9F9",
      "--main-surface-tertiary": "#B874E8",
      "--sidebar-surface-primary": "#E9D9F9",
      "--sidebar-surface-secondary": "#E7DBFF",
      "--sidebar-surface-tertiary": "#CAAAFF",
      "--sidebar-title-primary": "#560591",
      "--sidebar-body-primary": "#840CDB",
      "--sidebar-icon": "#9D3ED2",
      "--link": "#F4EFFF",
      "--link-hover": "#D6BFFE",
      "--surface-error": "#F4EFFF",
    },
    root: {
      "--gray-100": "#560591",
      "--gray-700": "#D6BFFE",
    },
  },
  21: {
    theme: {
      "--main-surface-background": "#CED7E4",
      "--message-surface": "#E4E8ED",
      "--dot-color": "#BFCDDC",
      "--text-primary": "#4E5D6D",
      "--text-secondary": "#6D8196",
      "--text-tertiary": "#576779",
      "--text-quaternary": "#768BA3",
      "--text-placeholder": "#9CB1CA",
      "--text-error": "#EEF1F5",
      "--border-xlight": "#F0F1F1",
      "--border-light": "#E4E8ED",
      "--border-medium": "#B5C1CF",
      "--border-heavy": "#8B9BAC",
      "--border-xheavy": "#697683",
      "--border-sharp": "#49535C",
      "--main-surface-primary": "#9CB1CA",
      "--main-surface-primary-inverse": "#4E5D6D",
      "--main-surface-secondary": "#CED7E4",
      "--main-surface-tertiary": "#768BA3",
      "--sidebar-surface-primary": "#CED7E4",
      "--sidebar-surface-secondary": "#E4E8ED",
      "--sidebar-surface-tertiary": "#B5C1CF",
      "--sidebar-title-primary": "#4E5D6D",
      "--sidebar-body-primary": "#6D8196",
      "--sidebar-icon": "#576779",
      "--link": "#EEF1F5",
      "--link-hover": "#BFCDDC",
      "--surface-error": "#EEF1F5",
    },
    root: {
      "--gray-100": "#4E5D6D",
      "--gray-700": "#BFCDDC",
    },
  },
  22: {
    theme: {
      "--main-surface-background": "#E7D49B",
      "--message-surface": "#E4D29E",
      "--dot-color": "#E0CD95",
      "--text-primary": "#675D42",
      "--text-secondary": "#8D815C",
      "--text-tertiary": "#6D6447",
      "--text-quaternary": "#948762",
      "--text-placeholder": "#BDAD7E",
      "--text-error": "#F8F0DE",
      "--border-xlight": "#F1F1EF",
      "--border-light": "#E4D29E",
      "--border-medium": "#BAAB80",
      "--border-heavy": "#928663",
      "--border-xheavy": "#6B6248",
      "--border-sharp": "#47402E",
      "--main-surface-primary": "#BDAD7E",
      "--main-surface-primary-inverse": "#675D42",
      "--main-surface-secondary": "#E7D49B",
      "--main-surface-tertiary": "#948762",
      "--sidebar-surface-primary": "#E7D49B",
      "--sidebar-surface-secondary": "#E4D29E",
      "--sidebar-surface-tertiary": "#BAAB80",
      "--sidebar-title-primary": "#675D42",
      "--sidebar-body-primary": "#8D815C",
      "--sidebar-icon": "#6D6447",
      "--link": "#F8F0DE",
      "--link-hover": "#E0CD95",
      "--surface-error": "#F8F0DE",
    },
    root: {
      "--gray-100": "#675D42",
      "--gray-700": "#E0CD95",
    },
  },
  23: {
    theme: {
      "--main-surface-background": "#C6C0B9",
      "--message-surface": "#F7EFE7",
      "--dot-color": "#D6B588",
      "--text-primary": "#5A4B36",
      "--text-secondary": "#816C50",
      "--text-tertiary": "#705E46",
      "--text-quaternary": "#998161",
      "--text-placeholder": "#C3A57E",
      "--text-error": "#F0DFCC",
      "--border-xlight": "#E3E1E0",
      "--border-light": "#F7EFE7",
      "--border-medium": "#E8CDAB",
      "--border-heavy": "#C3A57E",
      "--border-xheavy": "#998161",
      "--border-sharp": "#705E46",
      "--main-surface-primary": "#C6C0B9",
      "--main-surface-primary-inverse": "#5A4B36",
      "--main-surface-secondary": "#C6C0B9",
      "--main-surface-tertiary": "#998161",
      "--sidebar-surface-primary": "#C6C0B9",
      "--sidebar-surface-secondary": "#F7EFE7",
      "--sidebar-surface-tertiary": "#C3A57E",
      "--sidebar-title-primary": "#5A4B36",
      "--sidebar-body-primary": "#816C50",
      "--sidebar-icon": "#705E46",
      "--link": "#F0DFCC",
      "--link-hover": "#D6B588",
      "--surface-error": "#F0DFCC",
    },
    root: {
      "--gray-100": "#5A4B36",
      "--gray-700": "#D6B588",
    },
  },
};

function autoApplyTheme(currentTheme) {
  // Apply the theme if autoApply is true
  if (currentTheme != "1") {
    const darkTheme = document.querySelector(".dark");

    if (darkTheme) {
      // Loop through each key-value pair in customColors and replace the CSS variable
      for (const [variable, value] of Object.entries(
        themeColors[currentTheme].theme
      )) {
        darkTheme.style.setProperty(variable, value);
      }
    } else {
      console.warn(".dark class not found!");
    }

    const lightTheme = document.querySelector(".light");

    if (lightTheme) {
      // Loop through each key-value pair in customColors and replace the CSS variable
      for (const [variable, value] of Object.entries(
        themeColors[currentTheme].theme
      )) {
        lightTheme.style.setProperty(variable, value);
      }
    } else {
      console.warn(".light class not found!");
    }

    // Reference the root element (:root)
    const root = document.documentElement;

    if (lightTheme) {
      themeColors[currentTheme].root["--gray-100"] =
        themeColors[currentTheme].theme["--sidebar-surface-primary"];
    }

    // Loop through each key-value pair in customColors and replace the CSS variable
    for (const [variable, value] of Object.entries(
      themeColors[currentTheme].root
    )) {
      root.style.setProperty(variable, value);
    }

    const style = document.createElement("style");
    style.innerHTML = `
  button svg {
    color: ${themeColors[currentTheme].theme["--text-primary"]} !important;
  }
`;
    document.head.appendChild(style);
  } else {
    console.warn("No currentTheme found in storage!");
  }
}

function initContentScript() {
  console.log("======== content script dom loaded");

  const storage = chrome.storage.sync;

  // Retrieve the autoApply and currentTheme values from storage
  storage.get(["autoApply", "currentTheme"], (result) => {
    const autoApply = result.autoApply;
    const currentTheme = result.currentTheme;

    console.log("autoApply:", autoApply);
    console.log("currentTheme:", currentTheme);

    if (autoApply === true) {
      autoApplyTheme(currentTheme);

      // Set up MutationObserver to reapply the theme if DOM changes
      const observer = new MutationObserver(() => {
        console.log("DOM changed, reapplying theme...");
        storage.get(["currentTheme"], (result1) => {
          autoApplyTheme(result1.currentTheme);
        });
      });

      // Start observing changes to the document's body
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      // Update currentTheme in storage if autoApply is false
      storage.set({ currentTheme: "1" }, () => {
        console.log("currentTheme updated to: 1");
      });
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContentScript);
} else {
  initContentScript();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in content script:", message);

  if (message.action === "applyTheme") {
    const themeId = message.themeId;

    const darkTheme = document.querySelector(".dark");
    const lightTheme = document.querySelector(".light");

    console.log("+++++++++============", darkTheme, lightTheme);
    if (themeId == "1") {
      // Reload the website
      console.log("Theme ID is 1, reloading the website...");
      location.reload(); // This reloads the current page
    } else {
      if (darkTheme || lightTheme) {
        // Loop through each key-value pair in customColors and replace the CSS variable

        if (darkTheme) {
          for (const [variable, value] of Object.entries(
            themeColors[themeId].theme
          )) {
            darkTheme.style.setProperty(variable, value);
          }
        }

        if (lightTheme) {
          for (const [variable, value] of Object.entries(
            themeColors[themeId].theme
          )) {
            lightTheme.style.setProperty(variable, value);
          }
        }
        // Reference the root element (:root)
        const root = document.documentElement;

        if (lightTheme) {
          themeColors[themeId].root["--gray-100"] =
            themeColors[themeId].theme["--sidebar-surface-primary"];
        }

        // Loop through each key-value pair in customColors and replace the CSS variable
        for (const [variable, value] of Object.entries(
          themeColors[themeId].root
        )) {
          root.style.setProperty(variable, value);
        }

        const style = document.createElement("style");
        style.innerHTML = `
      button svg {
        color: ${themeColors[themeId].theme["--text-primary"]} !important;
      }
    `;
        document.head.appendChild(style);
      } else {
        console.warn(".dark class not found!");
      }
    }

    // // Apply the theme styles
    // document.body.style.backgroundColor = theme.colors.background;
    // document.body.style.color = theme.colors.text;

    // // Optionally, style links
    // const links = document.querySelectorAll("a");
    // links.forEach((link) => {
    //   link.style.color = theme.colors.accent;
    // });

    console.log("Content Script Theme applied:", themeColors);

    // Send a response back to the popup
    sendResponse({ status: "success" });
    return true; // Indicate async response
  }
});
