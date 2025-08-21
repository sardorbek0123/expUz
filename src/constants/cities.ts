export interface City {
  id: string;
  name: {
    en: string;
    ru: string;
    uz: string;
  };
  description: {
    en: string;
    ru: string;
    uz: string;
  };
  image: string;
  highlights: {
    en: string[];
    ru: string[];
    uz: string[];
  };
  duration: {
    en: string;
    ru: string;
    uz: string;
  };
  badge: {
    en: string;
    ru: string;
    uz: string;
  };
}

export const cities: City[] = [
  {
    id: "samarkand",
    name: {
      en: "Samarkand",
      ru: "Самарканд",
      uz: "Samarqand"
    },
    description: {
      en: "Legendary Silk Road city with stunning Islamic architecture",
      ru: "Легендарный город Шелкового пути с потрясающей исламской архитектурой",
      uz: "Ildizli Ipak yo'li shahri, ajoyib islom me'morchiligi bilan"
    },
    image: "/samarkand.jpg",
    highlights: {
      en: ["Registan Square", "Shah-i-Zinda", "Bibi Khanum Mosque"],
      ru: ["Площадь Регистан", "Шахи-Зинда", "Мечеть Биби-Ханым"],
      uz: ["Registon maydoni", "Shohi Zinda", "Bibi Xonum masjidi"]
    },
    duration: {
      en: "3 days",
      ru: "3 дня",
      uz: "3 kun"
    },
    badge: {
      en: "UNESCO",
      ru: "ЮНЕСКО",
      uz: "UNESCO"
    }
  },
  {
    id: "bukhara",
    name: {
      en: "Bukhara",
      ru: "Бухара",
      uz: "Buxoro"
    },
    description: {
      en: "Living museum of Central Asian Islamic civilization",
      ru: "Живой музей центральноазиатской исламской цивилизации",
      uz: "Markaziy Osiyo islom madaniyatining jonli muzeyi"
    },
    image: "/bukhara.webp",
    highlights: {
      en: ["Poi Kalyan Complex", "Ark Fortress", "Lyab-i-Hauz"],
      ru: ["Комплекс Пои-Калян", "Крепость Арк", "Ляби-Хауз"],
      uz: ["Poi Kalon majmuasi", "Ark qal'asi", "Labi Hovuz"]
    },
    duration: {
      en: "2 days",
      ru: "2 дня",
      uz: "2 kun"
    },
    badge: {
      en: "UNESCO",
      ru: "ЮНЕСКО",
      uz: "UNESCO"
    }
  },
  {
    id: "khiva",
    name: {
      en: "Khiva",
      ru: "Хива",
      uz: "Xiva"
    },
    description: {
      en: "Perfectly preserved medieval city within ancient walls",
      ru: "Идеально сохранившийся средневековый город в древних стенах",
      uz: "Qadimiy devorlar ichida mukammal saqlangan o'rta asr shahri"
    },
    image: "/khiva.jpg",
    highlights: {
      en: ["Itchan Kala", "Kunya Ark", "Islam Khoja Minaret"],
      ru: ["Ичан-Кала", "Куня-Арк", "Минарет Ислам-Ходжа"],
      uz: ["Ichan Qal'a", "Kunya Ark", "Islom Xo'ja minorasi"]
    },
    duration: {
      en: "2 days",
      ru: "2 дня",
      uz: "2 kun"
    },
    badge: {
      en: "UNESCO",
      ru: "ЮНЕСКО",
      uz: "UNESCO"
    }
  },
  {
    id: "termez",
    name: {
      en: "Termez",
      ru: "Термез",
      uz: "Termiz"
    },
    description: {
      en: "Ancient Buddhist heritage meets Islamic architecture",
      ru: "Древнее буддийское наследие встречается с исламской архитектурой",
      uz: "Qadimiy budda merosi islom me'morchiligi bilan uchrashadi"
    },
    image: "/termez.webp",
    highlights: {
      en: ["Al-Hakim at-Termezi", "Fayaz Tepa", "Sultan Saodat"],
      ru: ["Аль-Хаким ат-Термези", "Фаяз-Тепа", "Султан Саодат"],
      uz: ["Al-Hakim at-Termiziy", "Fayoz Tepa", "Sulton Saodat"]
    },
    duration: {
      en: "1 day",
      ru: "1 день",
      uz: "1 kun"
    },
    badge: {
      en: "Buddhist Heritage",
      ru: "Буддийское Наследие",
      uz: "Budda Merosi"
    }
  },
  {
    id: "tashkent",
    name: {
      en: "Tashkent",
      ru: "Ташкент",
      uz: "Toshkent"
    },
    description: {
      en: "Modern capital blending Soviet architecture with Islamic heritage",
      ru: "Современная столица, сочетающая советскую архитектуру с исламским наследием",
      uz: "Sovet me'morchiligi va islom merosini birlashtirgan zamonaviy poytaxt"
    },
    image: "/tashkent.jpg",
    highlights: {
      en: ["Independence Square", "Chorsu Bazaar", "Modern Metro"],
      ru: ["Площадь Независимости", "Чорсу Базар", "Современное Метро"],
      uz: ["Mustaqillik maydoni", "Chorsu bozori", "Zamonaviy metro"]
    },
    duration: {
      en: "2 days",
      ru: "2 дня",
      uz: "2 kun"
    },
    badge: {
      en: "Capital",
      ru: "Столица",
      uz: "Poytaxt"
    }
  }
];

export const getCityData = (language: string) => {
  return cities.map(city => ({
    id: city.id,
    name: city.name[language as keyof typeof city.name] || city.name.en,
    description: city.description[language as keyof typeof city.description] || city.description.en,
    image: city.image,
    highlights: city.highlights[language as keyof typeof city.highlights] || city.highlights.en,
    duration: city.duration[language as keyof typeof city.duration] || city.duration.en,
    badge: city.badge[language as keyof typeof city.badge] || city.badge.en,
  }));
};
