const surah = [
	{
		id: 1,
		name: "Al-Fatihah",
		ayat: 7,
		link: "https://www.truemuslims.net/Quran/Bangla/001.mp3",
		revelation: "Makkah",
	},
	{
		id: 2,
		name: "Al-Baqarah",
		ayat: 286,
		link: "https://www.truemuslims.net/Quran/Bangla/002.mp3",
		revelation: "Madinah",
	},
	{
		id: 3,
		name: "Al-Imran",
		ayat: 200,
		link: "https://www.truemuslims.net/Quran/Bangla/003.mp3",
		revelation: "Madinah",
	},
	{
		id: 4,
		name: "An-Nisa",
		ayat: 176,
		link: "https://www.truemuslims.net/Quran/Bangla/004.mp3",
		revelation: "Madinah",
	},
	{
		id: 5,
		name: "Al-Ma'idah",
		ayat: 120,
		link: "https://www.truemuslims.net/Quran/Bangla/005.mp3",
		revelation: "Madinah",
	},
	{
		id: 6,
		name: "Al-An'am",
		ayat: 165,
		link: "https://www.truemuslims.net/Quran/Bangla/006.mp3",
		revelation: "Makkah",
	},
	{
		id: 7,
		name: "Al-A'raf",
		ayat: 206,
		link: "https://www.truemuslims.net/Quran/Bangla/007.mp3",
		revelation: "Makkah",
	},
	{
		id: 8,
		name: "Al-Anfal",
		ayat: 88,
		link: "https://www.truemuslims.net/Quran/Bangla/008.mp3",
		revelation: "Madinah",
	},
	{
		id: 9,
		name: "At-Tawbah",
		ayat: 129,
		link: "https://www.truemuslims.net/Quran/Bangla/009.mp3",
		revelation: "Madinah",
	},
	{
		id: 10,
		name: "Yunus",
		ayat: 109,
		link: "https://www.truemuslims.net/Quran/Bangla/010.mp3",
		revelation: "Makkah",
	},
	{
		id: 11,
		name: "Hud",
		ayat: 123,
		link: "https://www.truemuslims.net/Quran/Bangla/011.mp3",
	},
	{
		id: 12,
		name: "Yusuf",
		ayat: 111,
		link: "https://www.truemuslims.net/Quran/Bangla/012.mp3",
		revelation: "Makkah",
	},
	{
		id: 13,
		name: "Ar-Ra'd",
		ayat: 43,
		link: "https://www.truemuslims.net/Quran/Bangla/013.mp3",
		revelation: "Madinah",
	},
	{
		id: 14,
		name: "Ibrahim",
		ayat: 52,
		link: "https://www.truemuslims.net/Quran/Bangla/014.mp3",
		revelation: "Makkah",
	},
	{
		id: 15,
		name: "Al-Hijr",
		ayat: 99,
		link: "https://www.truemuslims.net/Quran/Bangla/015.mp3",
		revelation: "Makkah",
	},
	{
		id: 16,
		name: "An-Nahl",
		ayat: 128,
		link: "https://www.truemuslims.net/Quran/Bangla/016.mp3",
		revelation: "Makkah",
	},
	{
		id: 17,
		name: "Al-Isra",
		ayat: 111,
		link: "https://www.truemuslims.net/Quran/Bangla/017.mp3",
		revelation: "Makkah",
	},
	{
		id: 18,
		name: "Al-Kahf",
		ayat: 110,
		link: "https://www.truemuslims.net/Quran/Bangla/018.mp3",
		revelation: "Makkah",
	},
	{
		id: 19,
		name: "Maryam",
		ayat: 98,
		link: "https://www.truemuslims.net/Quran/Bangla/019.mp3",
		revelation: "Makkah",
	},
	{
		id: 20,
		name: "	Ta-Ha",
		ayat: 135,
		link: "https://www.truemuslims.net/Quran/Bangla/020.mp3",
		revelation: "Makkah",
	},
	{
		id: 21,
		name: "	Al-Anbiya",
		ayat: 112,
		link: "https://www.truemuslims.net/Quran/Bangla/021.mp3",
		revelation: "Makkah",
	},
	{
		id: 22,
		name: "Al-Hajj",
		ayat: 78,
		link: "https://www.truemuslims.net/Quran/Bangla/022.mp3",
		revelation: "Madinah",
	},
	{
		id: 23,
		name: "Al-Mu'minun",
		ayat: 118,
		link: "https://www.truemuslims.net/Quran/Bangla/023.mp3",
		revelation: "Makkah",
	},
	{
		id: 24,
		name: "An-Nur",
		ayat: 102,
		link: "https://www.truemuslims.net/Quran/Bangla/024.mp3",
		revelation: "Madinah",
	},
	{
		id: 25,
		name: "	Al-Furqan",
		ayat: 77,
		link: "https://www.truemuslims.net/Quran/Bangla/025.mp3",
		revelation: "Makkah",
	},
	{
		id: 26,
		name: "Ash-Shu'ara",
		ayat: 227,
		link: "https://www.truemuslims.net/Quran/Bangla/026.mp3",
		revelation: "Makkah",
	},
	{
		id: 27,
		name: "An-Naml",
		ayat: 93,
		link: "https://www.truemuslims.net/Quran/Bangla/027.mp3",
		revelation: "Makkah",
	},
	{
		id: 28,
		name: "Al-Qasas",
		ayat: 88,
		link: "https://www.truemuslims.net/Quran/Bangla/028.mp3",
		revelation: "Makkah",
	},
	{
		id: 29,
		name: "Al-Ankabut",
		ayat: 69,
		link: "https://www.truemuslims.net/Quran/Bangla/029.mp3",
		revelation: "Makkah",
	},
	{
		id: 30,
		name: "Ar-Rum",
		ayat: 60,
		link: "https://www.truemuslims.net/Quran/Bangla/030.mp3",
		revelation: "Makkah",
	},
	{
		id: 31,
		name: "Luqmaan",
		ayat: 57,
		link: "https://www.truemuslims.net/Quran/Bangla/031.mp3",
		revelation: "Makkah",
	},
	{
		id: 32,
		name: "As-Sajdah",
		ayat: 30,
		link: "https://www.truemuslims.net/Quran/Bangla/032.mp3",
		revelation: "Makkah",
	},
	{
		id: 33,
		name: "Al-Ahzaab",
		ayat: 73,
		link: "https://www.truemuslims.net/Quran/Bangla/033.mp3",
		revelation: "Madinah",
	},
	{
		id: 34,
		name: "As-Saba",
		ayat: 54,
		link: "https://www.truemuslims.net/Quran/Bangla/034.mp3",
		revelation: "Makkah",
	},
	{
		id: 35,
		name: "Faatir",
		ayat: 45,
		link: "https://www.truemuslims.net/Quran/Bangla/035.mp3",
		revelation: "Makkah",
	},
	{
		id: 36,
		name: "	Ya-Sin",
		ayat: 83,
		link: "https://www.truemuslims.net/Quran/Bangla/036.mp3",
		revelation: "Makkah",
	},
	{
		id: 37,
		name: "	As-Saaffaat	",
		ayat: 182,
		link: "https://www.truemuslims.net/Quran/Bangla/037.mp3",
		revelation: "Makkah",
	},
	{
		id: 38,
		name: "Saad",
		ayat: 88,
		link: "https://www.truemuslims.net/Quran/Bangla/038.mp3",
		revelation: "Makkah",
	},
	{
		id: 39,
		name: "Az-Zumar",
		ayat: 75,
		link: "https://www.truemuslims.net/Quran/Bangla/039.mp3",
		revelation: "Makkah",
	},
	{
		id: 40,
		name: "Ghafir",
		ayat: 85,
		link: "https://www.truemuslims.net/Quran/Bangla/040.mp3",
		revelation: "Makkah",
	},
	{
		id: 41,
		name: "Fussilat",
		ayat: 54,
		link: "https://www.truemuslims.net/Quran/Bangla/041.mp3",
		revelation: "Makkah",
	},
	{
		id: 42,
		name: "Ash-Shura",
		ayat: 53,
		link: "https://www.truemuslims.net/Quran/Bangla/042.mp3",
		revelation: "Makkah",
	},
	{
		id: 43,
		name: "	Az-Zukhruf",
		ayat: 89,
		link: "https://www.truemuslims.net/Quran/Bangla/043.mp3",
		revelation: "Makkah",
	},
	{
		id: 44,
		name: "Ad-Dukhaan",
		ayat: 59,
		link: "https://www.truemuslims.net/Quran/Bangla/044.mp3",
		revelation: "Makkah",
	},
	{
		id: 45,
		name: "	Al-Jaathiyah",
		ayat: 37,
		link: "https://www.truemuslims.net/Quran/Bangla/045.mp3",
		revelation: "Makkah",
	},
	{
		id: 46,
		name: "	Al-Ahqaaf",
		ayat: 35,
		link: "https://www.truemuslims.net/Quran/Bangla/046.mp3",
		revelation: "Makkah",
	},
	{
		id: 47,
		name: "	Muhammad",
		ayat: 38,
		link: "https://www.truemuslims.net/Quran/Bangla/047.mp3",
		revelation: "Madinah",
	},
	{
		id: 48,
		name: "	Al-Fath",
		ayat: 29,
		link: "https://www.truemuslims.net/Quran/Bangla/048.mp3",
		revelation: "Madinah",
	},
	{
		id: 49,
		name: "	Al-Hujuraat",
		ayat: 18,
		link: "https://www.truemuslims.net/Quran/Bangla/049.mp3",
		revelation: "Madinah",
	},
	{
		id: 50,
		name: "Qaaf",
		ayat: 45,
		link: "https://www.truemuslims.net/Quran/Bangla/050.mp3",
		revelation: "Makkah",
	},
	{
		id: 51,
		name: "Adh-Dhaariyaat",
		ayat: 60,
		link: "https://www.truemuslims.net/Quran/Bangla/051.mp3",
		revelation: "Makkah",
	},
	{
		id: 52,
		name: "At-Toor",
		ayat: 49,
		link: "https://www.truemuslims.net/Quran/Bangla/052.mp3",
		revelation: "Makkah",
	},
	{
		id: 53,
		name: "An-Najm",
		ayat: 60,
		link: "https://www.truemuslims.net/Quran/Bangla/053.mp3",
		revelation: "Makkah",
	},
	{
		id: 54,
		name: "Al-Qamar",
		ayat: 55,
		link: "https://www.truemuslims.net/Quran/Bangla/054.mp3",
		revelation: "Makkah",
	},
	{
		id: 55,
		name: "Ar-Rahman",
		ayat: 78,
		link: "https://www.truemuslims.net/Quran/Bangla/055.mp3",
		revelation: "Madinah",
	},
	{
		id: 56,
		name: "	Al-Waqi'ah",
		ayat: 96,
		link: "https://www.truemuslims.net/Quran/Bangla/056.mp3",
		revelation:"Makkah"
	},
	{
		id: 57,
		name: "Al-Hadeed",
		ayat: 29,
		link: "https://www.truemuslims.net/Quran/Bangla/057.mp3",
		revelation:"Madinah"
	},
	{
		id: 58,
		name: "Al-Mujadila",
		ayat: 22,
		link: "https://www.truemuslims.net/Quran/Bangla/058.mp3",
		revelation:"Madinah"
	},
	{
		id: 59,
		name: "Al-Hashr",
		ayat: 24,
		link: "https://www.truemuslims.net/Quran/Bangla/059.mp3",
		revelation:"Madinah"
	},
	{
		id: 60,
		name: "Al-Mumtahanah",
		ayat: 13,
		link: "https://www.truemuslims.net/Quran/Bangla/060.mp3",
		revelation:"Madinah"
	},
	{
		id: 61,
		name: "As-Saff",
		ayat: 14,
		link: "https://www.truemuslims.net/Quran/Bangla/061.mp3",
		revelation:"Madinah"
	},
	{
		id: 62,
		name: "Al-Jumu'ah",
		ayat: 11,
		link: "https://www.truemuslims.net/Quran/Bangla/062.mp3",
		revelation:"Madinah"
	},
	{
		id: 63,
		name: "Al-Munafiqoon",
		ayat: 11,
		link: "https://www.truemuslims.net/Quran/Bangla/063.mp3",
		revelation:"Madinah"
	},
	{
		id: 64,
		name: "At-Taghabun",
		ayat: 18,
		link: "https://www.truemuslims.net/Quran/Bangla/064.mp3",
		revelation:"Madinah"
	},
	{
		id: 65,
		name: "At-Talaq",
		ayat: 12,
		link: "https://www.truemuslims.net/Quran/Bangla/065.mp3",
		revelation:"Madinah"
	},
	{
		id: 66,
		name: "At-Tahreem",
		ayat: 12,
		link: "https://www.truemuslims.net/Quran/Bangla/066.mp3",
		revelation:"Madinah"
	},
	{
		id: 67,
		name: "Al-Mulk",
		ayat: 30,
		link: "https://www.truemuslims.net/Quran/Bangla/067.mp3",
		revelation:"Makkah"
	},
	{
		id: 68,
		name: "Al-Qalam",
		ayat: 52,
		link: "https://www.truemuslims.net/Quran/Bangla/068.mp3",
		revelation:"Makkah"
	},
	{
		id: 69,
		name: "Al-Haaqqa",
		ayat: 52,
		link: "https://www.truemuslims.net/Quran/Bangla/069.mp3",
		revelation:"Makkah"
	},
	{
		id: 70,
		name: "Al-Ma'aarij",
		ayat: 44,
		link: "https://www.truemuslims.net/Quran/Bangla/070.mp3",
		revelation:"Makkah"
	},
	{
		id: 71,
		name: "Nuh",
		ayat: 28,
		link: "https://www.truemuslims.net/Quran/Bangla/071.mp3",
		revelation:"Makkah"
	},
	{
		id: 72,
		name: "Al-Jinn",
		ayat: 28,
		link: "https://www.truemuslims.net/Quran/Bangla/072.mp3",
		revelation:"Makkah"
	},
	{
		id: 73,
		name: "Al-Muzzammil",
		ayat: 20,
		link: "https://www.truemuslims.net/Quran/Bangla/073.mp3",
		revelation:"Makkah"
	},
	{
		id: 74,
		name: "Al-Muddaththir",
		ayat: 56,
		link: "https://www.truemuslims.net/Quran/Bangla/074.mp3",
		revelation:"Makkah"
	},
	{
		id: 75,
		name: "Al-Qiyamah",
		ayat: 40,
		link: "https://www.truemuslims.net/Quran/Bangla/075.mp3",
		revelation:"Makkah"
	},
	{
		id: 76,
		name: "Al-Insaan|Ad-Dahr",
		ayat: 31,
		link: "https://www.truemuslims.net/Quran/Bangla/076.mp3",
		revelation:"Madinah"
	},
	{
		id: 77,
		name: "Al-Mursalaat",
		ayat: 50,
		link: "https://www.truemuslims.net/Quran/Bangla/077.mp3",
		revelation:"Makkah"
	},
	{
		id: 78,
		name: "An-Naba'",
		ayat: 40,
		link: "https://www.truemuslims.net/Quran/Bangla/078.mp3",
		revelation:"Makkah"
	},
	{
		id: 79,
		name: "An-Naazi'aat",
		ayat: 46,
		link: "https://www.truemuslims.net/Quran/Bangla/079.mp3",
		revelation:"Makkah"
	},
	{
		id: 80,
		name: "Abasa",
		ayat: 42,
		link: "https://www.truemuslims.net/Quran/Bangla/080.mp3",
		revelation:"Makkah"
	},
	{
		id: 81,
		name: "At-Takweer",
		ayat: 29,
		link: "https://www.truemuslims.net/Quran/Bangla/081.mp3",
		revelation:"Makkah"
	},
	{
		id: 82,
		name: "Al-Infitar",
		ayat: 19,
		link: "https://www.truemuslims.net/Quran/Bangla/082.mp3",
		revelation:"Makkah"
	},
	{
		id: 83,
		name: "Al-Mutaffifeen",
		ayat: 36,
		link: "https://www.truemuslims.net/Quran/Bangla/083.mp3",
		revelation:"Makkah"
	},
	{
		id: 84,
		name: "Al-Inshiqaaq",
		ayat: 25,
		link: "https://www.truemuslims.net/Quran/Bangla/084.mp3",
		revelation:"Makkah"
	},
	{
		id: 85,
		name: "Al-Burooj",
		ayat: 22,
		link: "https://www.truemuslims.net/Quran/Bangla/085.mp3",
		revelation:"Makkah"
	},
	{
		id: 86,
		name: "At-Taariq",
		ayat: 17,
		link: "https://www.truemuslims.net/Quran/Bangla/086.mp3",
		revelation:"Makkah"
	},
	{
		id: 87,
		name: "Al-A'la",
		ayat: 19,
		link: "https://www.truemuslims.net/Quran/Bangla/087.mp3",
		revelation:"Makkah"
	},
	{
		id: 88,
		name: "Al-Ghaashiyah",
		ayat: 26,
		link: "https://www.truemuslims.net/Quran/Bangla/088.mp3",
		revelation:"Makkah"
	},
	{
		id: 89,
		name: "Al-Fajr",
		ayat: 30,
		link: "https://www.truemuslims.net/Quran/Bangla/089.mp3",
		revelation:"Makkah"
	},
	{
		id: 90,
		name: "Al-Balad",
		ayat: 20,
		link: "https://www.truemuslims.net/Quran/Bangla/090.mp3",
		revelation:"Makkah"
	},
	{
		id: 91,
		name: "Ash-Shams",
		ayat: 15,
		link: "https://www.truemuslims.net/Quran/Bangla/091.mp3",
		revelation:"Makkah"
	},
	{
		id: 92,
		name: "Al-Layl",
		ayat: 21,
		link: "https://www.truemuslims.net/Quran/Bangla/092.mp3",
		revelation:"Makkah"
	},
	{
		id: 93,
		name: "Ad-Dhuha",
		ayat: 11,
		link: "https://www.truemuslims.net/Quran/Bangla/093.mp3",
		revelation:"Makkah"
	},
	{
		id: 94,
		name: "Ash-Sharh/Al-Inshirah",
		ayat: 8,
		link: "https://www.truemuslims.net/Quran/Bangla/094.mp3",
		revelation:"Makkah"
	},
	{
		id: 95,
		name: "At-Tin",
		ayat: 8,
		link: "https://www.truemuslims.net/Quran/Bangla/095.mp3",
		revelation:"Makkah"
	},
	{
		id: 96,
		name: "Al-Alaq",
		ayat: 19,
		link: "https://www.truemuslims.net/Quran/Bangla/096.mp3",
		revelation:"Makkah"
	},
	{
		id: 97,
		name: "Al-Qadr",
		ayat: 5,
		link: "https://www.truemuslims.net/Quran/Bangla/097.mp3",
		revelation:"Makkah"
	},
	{
		id: 98,
		name: "Al-Bayyinah",
		ayat: 8,
		link: "https://www.truemuslims.net/Quran/Bangla/098.mp3",
		revelation:"Madinah"
	},
	{
		id: 99,
		name: "Az-Zalzalah",
		ayat: 8,
		link: "https://www.truemuslims.net/Quran/Bangla/099.mp3",
		revelation:"Madinah"
	},
	{
		id: 100,
		name: "Al-'Aadiyat",
		ayat: 11,
		link: "https://www.truemuslims.net/Quran/Bangla/100.mp3",
		revelation:"Makkah"
	},
	{
		id: 101,
		name: "Al-Qaari'ah",
		ayat: 11,
		link: "https://www.truemuslims.net/Quran/Bangla/101.mp3",
		revelation:"Makkah"
	},
	{
		id: 102,
		name: "At-Takaathur",
		ayat: 8,
		link: "https://www.truemuslims.net/Quran/Bangla/102.mp3",
		revelation:"Makkah"
	},
	{
		id: 103,
		name: "Al-'Asr",
		ayat: 3,
		link: "https://www.truemuslims.net/Quran/Bangla/103.mp3",
		revelation:"Makkah"
	},
	{
		id: 104,
		name: "Al-Humazah",
		ayat: 9,
		link: "https://www.truemuslims.net/Quran/Bangla/104.mp3",
		revelation:"Makkah"
	},
	{
		id: 105,
		name: "Al-Feel",
		ayat: 5,
		link: "https://www.truemuslims.net/Quran/Bangla/105.mp3",
		revelation:"Makkah"
	},
	{
		id: 106,
		name: "Quraish",
		ayat: 4,
		link: "https://www.truemuslims.net/Quran/Bangla/106.mp3",
		revelation:"Makkah"
	},
	{
		id: 107,
		name: "Al-Maa'oon",
		ayat: 7,
		link: "https://www.truemuslims.net/Quran/Bangla/107.mp3",
		revelation:"Makkah"
	},
	{
		id: 108,
		name: "Al-Kawthar",
		ayat: 3,
		link: "https://www.truemuslims.net/Quran/Bangla/108.mp3",
		revelation:"Makkah"
	},
	{
		id: 109,
		name: "Al-Kaafiroon	",
		ayat: 6,
		link: "https://www.truemuslims.net/Quran/Bangla/109.mp3",
		revelation:"Makkah"
	},
	{
		id: 110,
		name: "An-Nasr",
		ayat: 3,
		link: "https://www.truemuslims.net/Quran/Bangla/110.mp3",
		revelation:"Madinah"
	},
	{
		id: 111,
		name: "Al-Masad",
		ayat: 5,
		link: "https://www.truemuslims.net/Quran/Bangla/111.mp3",
		revelation:"Makkah"
	},
	{
		id: 112,
		name: "Al-Ikhlas",
		ayat: 4,
		link: "https://www.truemuslims.net/Quran/Bangla/112.mp3",
		revelation:"Makkah"
	},
	{
		id: 113,
		name: "An Naas",
		ayat: 5,
		link: "https://www.truemuslims.net/Quran/Bangla/113.mp3",
		revelation:"Makkah"
	},
	{
		id: 114,
		name: "Al Falaq",
		ayat: 6,
		link: "https://www.truemuslims.net/Quran/Bangla/114.mp3",
		revelation:"Makkah"
	},
];
export default surah;
