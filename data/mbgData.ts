export interface KotaData {
  id: string;
  kota: string;
  provinsi: string;
  provinsiId: string;
  lat: number;
  lng: number;
  sekolah: number;       // jumlah sekolah yang sudah MBG
  anakUsia: number;      // jumlah anak usia emas yang tersentuh MBG
  ibuHamil: number;      // jumlah ibu hamil & menyusui yang tersentuh MBG
}

export const mbgData: KotaData[] = [
  // ── ACEH ─────────────────────────────────────────────────────────────────
  { id:"AC-01", kota:"Kota Banda Aceh",       provinsi:"Aceh", provinsiId:"AC", lat:5.548,  lng:95.323, sekolah:142, anakUsia:18200, ibuHamil:3100 },
  { id:"AC-02", kota:"Kab. Aceh Besar",       provinsi:"Aceh", provinsiId:"AC", lat:5.470,  lng:95.540, sekolah:198, anakUsia:29400, ibuHamil:4800 },
  { id:"AC-03", kota:"Kota Sabang",           provinsi:"Aceh", provinsiId:"AC", lat:5.889,  lng:95.319, sekolah:38,  anakUsia:5100,  ibuHamil:820  },
  { id:"AC-04", kota:"Kab. Pidie",            provinsi:"Aceh", provinsiId:"AC", lat:4.952,  lng:96.143, sekolah:221, anakUsia:35600, ibuHamil:5700 },
  { id:"AC-05", kota:"Kab. Bireuen",          provinsi:"Aceh", provinsiId:"AC", lat:5.204,  lng:96.701, sekolah:188, anakUsia:31000, ibuHamil:4950 },
  { id:"AC-06", kota:"Kota Lhokseumawe",      provinsi:"Aceh", provinsiId:"AC", lat:5.180,  lng:97.150, sekolah:105, anakUsia:16500, ibuHamil:2700 },
  { id:"AC-07", kota:"Kab. Aceh Utara",       provinsi:"Aceh", provinsiId:"AC", lat:5.120,  lng:97.010, sekolah:265, anakUsia:44000, ibuHamil:7100 },
  { id:"AC-08", kota:"Kab. Aceh Timur",       provinsi:"Aceh", provinsiId:"AC", lat:4.640,  lng:97.490, sekolah:210, anakUsia:36800, ibuHamil:5900 },
  { id:"AC-09", kota:"Kota Langsa",           provinsi:"Aceh", provinsiId:"AC", lat:4.470,  lng:97.970, sekolah:98,  anakUsia:14200, ibuHamil:2300 },
  { id:"AC-10", kota:"Kab. Aceh Selatan",     provinsi:"Aceh", provinsiId:"AC", lat:3.226,  lng:97.380, sekolah:145, anakUsia:22000, ibuHamil:3500 },

  // ── SUMATERA UTARA ────────────────────────────────────────────────────────
  { id:"SU-01", kota:"Kota Medan",            provinsi:"Sumatera Utara", provinsiId:"SU", lat:3.597,  lng:98.672, sekolah:580, anakUsia:92000, ibuHamil:15200 },
  { id:"SU-02", kota:"Kab. Deli Serdang",     provinsi:"Sumatera Utara", provinsiId:"SU", lat:3.490,  lng:98.900, sekolah:420, anakUsia:72000, ibuHamil:11500 },
  { id:"SU-03", kota:"Kab. Langkat",          provinsi:"Sumatera Utara", provinsiId:"SU", lat:3.750,  lng:98.310, sekolah:310, anakUsia:52000, ibuHamil:8400  },
  { id:"SU-04", kota:"Kota Binjai",           provinsi:"Sumatera Utara", provinsiId:"SU", lat:3.596,  lng:98.490, sekolah:148, anakUsia:22500, ibuHamil:3700  },
  { id:"SU-05", kota:"Kab. Simalungun",       provinsi:"Sumatera Utara", provinsiId:"SU", lat:2.970,  lng:99.050, sekolah:280, anakUsia:46000, ibuHamil:7400  },
  { id:"SU-06", kota:"Kota Pematangsiantar",  provinsi:"Sumatera Utara", provinsiId:"SU", lat:2.959,  lng:99.069, sekolah:165, anakUsia:25000, ibuHamil:4100  },
  { id:"SU-07", kota:"Kab. Tapanuli Utara",   provinsi:"Sumatera Utara", provinsiId:"SU", lat:2.156,  lng:98.975, sekolah:198, anakUsia:30000, ibuHamil:4800  },
  { id:"SU-08", kota:"Kab. Tapanuli Selatan", provinsi:"Sumatera Utara", provinsiId:"SU", lat:1.498,  lng:99.214, sekolah:175, anakUsia:27500, ibuHamil:4400  },
  { id:"SU-09", kota:"Kota Padangsidimpuan",  provinsi:"Sumatera Utara", provinsiId:"SU", lat:1.379,  lng:99.274, sekolah:120, anakUsia:18500, ibuHamil:3000  },
  { id:"SU-10", kota:"Kab. Asahan",           provinsi:"Sumatera Utara", provinsiId:"SU", lat:2.680,  lng:99.600, sekolah:240, anakUsia:38000, ibuHamil:6100  },
  { id:"SU-11", kota:"Kota Tanjungbalai",     provinsi:"Sumatera Utara", provinsiId:"SU", lat:2.966,  lng:99.800, sekolah:88,  anakUsia:13200, ibuHamil:2150  },

  // ── SUMATERA BARAT ────────────────────────────────────────────────────────
  { id:"SB-01", kota:"Kota Padang",           provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.947, lng:100.354, sekolah:325, anakUsia:52000, ibuHamil:8500 },
  { id:"SB-02", kota:"Kab. Padang Pariaman",  provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.545, lng:100.176, sekolah:195, anakUsia:31000, ibuHamil:5000 },
  { id:"SB-03", kota:"Kota Bukittinggi",      provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.308, lng:100.370, sekolah:98,  anakUsia:14500, ibuHamil:2350 },
  { id:"SB-04", kota:"Kab. Agam",             provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.156, lng:100.133, sekolah:210, anakUsia:33500, ibuHamil:5400 },
  { id:"SB-05", kota:"Kota Payakumbuh",       provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.224, lng:100.629, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"SB-06", kota:"Kab. Lima Puluh Kota",  provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.118, lng:100.618, sekolah:178, anakUsia:28000, ibuHamil:4500 },
  { id:"SB-07", kota:"Kab. Solok",            provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.715, lng:100.658, sekolah:155, anakUsia:24000, ibuHamil:3900 },
  { id:"SB-08", kota:"Kota Solok",            provinsi:"Sumatera Barat", provinsiId:"SB", lat:-0.795, lng:100.658, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },
  { id:"SB-09", kota:"Kab. Pasaman",          provinsi:"Sumatera Barat", provinsiId:"SB", lat:0.315,  lng:99.970, sekolah:145, anakUsia:22000, ibuHamil:3550 },
  { id:"SB-10", kota:"Kab. Pesisir Selatan",  provinsi:"Sumatera Barat", provinsiId:"SB", lat:-1.828, lng:100.686, sekolah:168, anakUsia:26000, ibuHamil:4200 },

  // ── RIAU ──────────────────────────────────────────────────────────────────
  { id:"RI-01", kota:"Kota Pekanbaru",        provinsi:"Riau", provinsiId:"RI", lat:0.507,  lng:101.448, sekolah:385, anakUsia:62000, ibuHamil:10200 },
  { id:"RI-02", kota:"Kab. Kampar",           provinsi:"Riau", provinsiId:"RI", lat:0.356,  lng:101.050, sekolah:248, anakUsia:39000, ibuHamil:6300  },
  { id:"RI-03", kota:"Kab. Rokan Hulu",       provinsi:"Riau", provinsiId:"RI", lat:0.798,  lng:100.581, sekolah:198, anakUsia:31000, ibuHamil:5000  },
  { id:"RI-04", kota:"Kab. Rokan Hilir",      provinsi:"Riau", provinsiId:"RI", lat:2.143,  lng:100.839, sekolah:195, anakUsia:30500, ibuHamil:4900  },
  { id:"RI-05", kota:"Kab. Bengkalis",        provinsi:"Riau", provinsiId:"RI", lat:1.476,  lng:102.105, sekolah:175, anakUsia:27500, ibuHamil:4400  },
  { id:"RI-06", kota:"Kota Dumai",            provinsi:"Riau", provinsiId:"RI", lat:1.679,  lng:101.445, sekolah:128, anakUsia:19500, ibuHamil:3150  },
  { id:"RI-07", kota:"Kab. Indragiri Hulu",   provinsi:"Riau", provinsiId:"RI", lat:-0.353, lng:102.256, sekolah:168, anakUsia:26000, ibuHamil:4200  },
  { id:"RI-08", kota:"Kab. Pelalawan",        provinsi:"Riau", provinsiId:"RI", lat:-0.001, lng:102.167, sekolah:145, anakUsia:22500, ibuHamil:3600  },
  { id:"RI-09", kota:"Kab. Siak",             provinsi:"Riau", provinsiId:"RI", lat:1.012,  lng:102.075, sekolah:155, anakUsia:24000, ibuHamil:3850  },
  { id:"RI-10", kota:"Kab. Kepulauan Meranti",provinsi:"Riau", provinsiId:"RI", lat:1.203,  lng:102.694, sekolah:82,  anakUsia:12500, ibuHamil:2000  },

  // ── KEPULAUAN RIAU ────────────────────────────────────────────────────────
  { id:"KR-01", kota:"Kota Batam",            provinsi:"Kepulauan Riau", provinsiId:"KR", lat:1.045,  lng:104.030, sekolah:298, anakUsia:48000, ibuHamil:7800 },
  { id:"KR-02", kota:"Kota Tanjungpinang",    provinsi:"Kepulauan Riau", provinsiId:"KR", lat:0.919,  lng:104.445, sekolah:112, anakUsia:16500, ibuHamil:2700 },
  { id:"KR-03", kota:"Kab. Bintan",           provinsi:"Kepulauan Riau", provinsiId:"KR", lat:1.121,  lng:104.535, sekolah:75,  anakUsia:11000, ibuHamil:1800 },
  { id:"KR-04", kota:"Kab. Karimun",          provinsi:"Kepulauan Riau", provinsiId:"KR", lat:1.052,  lng:103.459, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"KR-05", kota:"Kab. Natuna",           provinsi:"Kepulauan Riau", provinsiId:"KR", lat:3.947,  lng:108.348, sekolah:52,  anakUsia:7500,  ibuHamil:1200 },

  // ── JAMBI ─────────────────────────────────────────────────────────────────
  { id:"JB-01", kota:"Kota Jambi",            provinsi:"Jambi", provinsiId:"JB", lat:-1.611, lng:103.616, sekolah:215, anakUsia:34000, ibuHamil:5500 },
  { id:"JB-02", kota:"Kab. Muaro Jambi",      provinsi:"Jambi", provinsiId:"JB", lat:-1.702, lng:103.620, sekolah:168, anakUsia:26000, ibuHamil:4200 },
  { id:"JB-03", kota:"Kab. Batanghari",       provinsi:"Jambi", provinsiId:"JB", lat:-1.755, lng:103.010, sekolah:132, anakUsia:20500, ibuHamil:3300 },
  { id:"JB-04", kota:"Kab. Tebo",             provinsi:"Jambi", provinsiId:"JB", lat:-1.425, lng:102.403, sekolah:118, anakUsia:18000, ibuHamil:2900 },
  { id:"JB-05", kota:"Kab. Bungo",            provinsi:"Jambi", provinsiId:"JB", lat:-1.421, lng:102.128, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"JB-06", kota:"Kab. Merangin",         provinsi:"Jambi", provinsiId:"JB", lat:-2.268, lng:102.348, sekolah:145, anakUsia:22000, ibuHamil:3550 },
  { id:"JB-07", kota:"Kab. Sarolangun",       provinsi:"Jambi", provinsiId:"JB", lat:-2.213, lng:102.921, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"JB-08", kota:"Kab. Kerinci",          provinsi:"Jambi", provinsiId:"JB", lat:-2.083, lng:101.463, sekolah:98,  anakUsia:14800, ibuHamil:2400 },

  // ── SUMATERA SELATAN ──────────────────────────────────────────────────────
  { id:"SS-01", kota:"Kota Palembang",        provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-2.992, lng:104.757, sekolah:498, anakUsia:80000, ibuHamil:13000 },
  { id:"SS-02", kota:"Kab. Banyuasin",        provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-2.748, lng:104.688, sekolah:248, anakUsia:39000, ibuHamil:6300  },
  { id:"SS-03", kota:"Kab. Ogan Komering Ilir",provinsi:"Sumatera Selatan",provinsiId:"SS", lat:-3.523, lng:105.229, sekolah:265, anakUsia:42000, ibuHamil:6800  },
  { id:"SS-04", kota:"Kab. Musi Banyuasin",   provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-2.506, lng:103.904, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"SS-05", kota:"Kab. Musi Rawas",       provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-2.920, lng:103.047, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"SS-06", kota:"Kota Prabumulih",       provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-3.431, lng:104.241, sekolah:98,  anakUsia:15000, ibuHamil:2450  },
  { id:"SS-07", kota:"Kab. Lahat",            provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-3.787, lng:103.541, sekolah:178, anakUsia:28000, ibuHamil:4500  },
  { id:"SS-08", kota:"Kab. Muara Enim",       provinsi:"Sumatera Selatan", provinsiId:"SS", lat:-3.666, lng:104.029, sekolah:198, anakUsia:31500, ibuHamil:5100  },

  // ── BENGKULU ──────────────────────────────────────────────────────────────
  { id:"BE-01", kota:"Kota Bengkulu",         provinsi:"Bengkulu", provinsiId:"BE", lat:-3.800, lng:102.265, sekolah:148, anakUsia:22500, ibuHamil:3650 },
  { id:"BE-02", kota:"Kab. Bengkulu Utara",   provinsi:"Bengkulu", provinsiId:"BE", lat:-3.302, lng:101.917, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"BE-03", kota:"Kab. Bengkulu Selatan", provinsi:"Bengkulu", provinsiId:"BE", lat:-4.481, lng:103.024, sekolah:95,  anakUsia:14200, ibuHamil:2300 },
  { id:"BE-04", kota:"Kab. Rejang Lebong",    provinsi:"Bengkulu", provinsiId:"BE", lat:-3.461, lng:102.568, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"BE-05", kota:"Kab. Kepahiang",        provinsi:"Bengkulu", provinsiId:"BE", lat:-3.664, lng:102.540, sekolah:78,  anakUsia:11500, ibuHamil:1850 },

  // ── LAMPUNG ───────────────────────────────────────────────────────────────
  { id:"LA-01", kota:"Kota Bandar Lampung",   provinsi:"Lampung", provinsiId:"LA", lat:-5.429, lng:105.261, sekolah:345, anakUsia:55000, ibuHamil:9000 },
  { id:"LA-02", kota:"Kab. Lampung Selatan",  provinsi:"Lampung", provinsiId:"LA", lat:-5.571, lng:105.466, sekolah:258, anakUsia:41000, ibuHamil:6600 },
  { id:"LA-03", kota:"Kab. Lampung Tengah",   provinsi:"Lampung", provinsiId:"LA", lat:-4.820, lng:105.296, sekolah:285, anakUsia:45500, ibuHamil:7300 },
  { id:"LA-04", kota:"Kab. Lampung Utara",    provinsi:"Lampung", provinsiId:"LA", lat:-4.571, lng:104.792, sekolah:198, anakUsia:31500, ibuHamil:5100 },
  { id:"LA-05", kota:"Kab. Lampung Barat",    provinsi:"Lampung", provinsiId:"LA", lat:-5.039, lng:104.186, sekolah:145, anakUsia:22000, ibuHamil:3550 },
  { id:"LA-06", kota:"Kota Metro",            provinsi:"Lampung", provinsiId:"LA", lat:-5.113, lng:105.307, sekolah:98,  anakUsia:14800, ibuHamil:2400 },
  { id:"LA-07", kota:"Kab. Tulang Bawang",    provinsi:"Lampung", provinsiId:"LA", lat:-4.273, lng:105.495, sekolah:168, anakUsia:26000, ibuHamil:4200 },
  { id:"LA-08", kota:"Kab. Pesawaran",        provinsi:"Lampung", provinsiId:"LA", lat:-5.367, lng:105.026, sekolah:132, anakUsia:20000, ibuHamil:3250 },
  { id:"LA-09", kota:"Kab. Tanggamus",        provinsi:"Lampung", provinsiId:"LA", lat:-5.410, lng:104.636, sekolah:185, anakUsia:29000, ibuHamil:4700 },
  { id:"LA-10", kota:"Kab. Pringsewu",        provinsi:"Lampung", provinsiId:"LA", lat:-5.358, lng:104.974, sekolah:112, anakUsia:17000, ibuHamil:2750 },

  // ── BANTEN ────────────────────────────────────────────────────────────────
  { id:"BT-01", kota:"Kota Tangerang",        provinsi:"Banten", provinsiId:"BT", lat:-6.178, lng:106.630, sekolah:445, anakUsia:72000, ibuHamil:11800 },
  { id:"BT-02", kota:"Kab. Tangerang",        provinsi:"Banten", provinsiId:"BT", lat:-6.165, lng:106.627, sekolah:520, anakUsia:84000, ibuHamil:13700 },
  { id:"BT-03", kota:"Kota Tangerang Selatan",provinsi:"Banten", provinsiId:"BT", lat:-6.289, lng:106.716, sekolah:385, anakUsia:62000, ibuHamil:10200 },
  { id:"BT-04", kota:"Kota Serang",           provinsi:"Banten", provinsiId:"BT", lat:-6.120, lng:106.150, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"BT-05", kota:"Kab. Serang",           provinsi:"Banten", provinsiId:"BT", lat:-6.192, lng:106.152, sekolah:265, anakUsia:42000, ibuHamil:6800  },
  { id:"BT-06", kota:"Kab. Lebak",            provinsi:"Banten", provinsiId:"BT", lat:-6.568, lng:106.295, sekolah:248, anakUsia:39000, ibuHamil:6300  },
  { id:"BT-07", kota:"Kab. Pandeglang",       provinsi:"Banten", provinsiId:"BT", lat:-6.308, lng:105.864, sekolah:232, anakUsia:37000, ibuHamil:5950  },
  { id:"BT-08", kota:"Kota Cilegon",          provinsi:"Banten", provinsiId:"BT", lat:-6.003, lng:106.034, sekolah:145, anakUsia:22000, ibuHamil:3550  },

  // ── DKI JAKARTA ───────────────────────────────────────────────────────────
  { id:"JK-01", kota:"Jakarta Pusat",         provinsi:"DKI Jakarta", provinsiId:"JK", lat:-6.186, lng:106.835, sekolah:385, anakUsia:58000, ibuHamil:9500  },
  { id:"JK-02", kota:"Jakarta Utara",         provinsi:"DKI Jakarta", provinsiId:"JK", lat:-6.121, lng:106.888, sekolah:415, anakUsia:65000, ibuHamil:10700 },
  { id:"JK-03", kota:"Jakarta Barat",         provinsi:"DKI Jakarta", provinsiId:"JK", lat:-6.168, lng:106.764, sekolah:465, anakUsia:74000, ibuHamil:12100 },
  { id:"JK-04", kota:"Jakarta Selatan",       provinsi:"DKI Jakarta", provinsiId:"JK", lat:-6.261, lng:106.810, sekolah:498, anakUsia:79000, ibuHamil:13000 },
  { id:"JK-05", kota:"Jakarta Timur",         provinsi:"DKI Jakarta", provinsiId:"JK", lat:-6.225, lng:106.900, sekolah:545, anakUsia:87000, ibuHamil:14300 },
  { id:"JK-06", kota:"Kep. Seribu",           provinsi:"DKI Jakarta", provinsiId:"JK", lat:-5.744, lng:106.559, sekolah:22,  anakUsia:3200,  ibuHamil:520   },

  // ── JAWA BARAT ────────────────────────────────────────────────────────────
  { id:"JW-01", kota:"Kota Bandung",          provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.914, lng:107.609, sekolah:685, anakUsia:110000,ibuHamil:18000 },
  { id:"JW-02", kota:"Kab. Bogor",            provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.529, lng:106.801, sekolah:720, anakUsia:115000,ibuHamil:18800 },
  { id:"JW-03", kota:"Kota Bogor",            provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.597, lng:106.806, sekolah:285, anakUsia:45000, ibuHamil:7350  },
  { id:"JW-04", kota:"Kab. Bekasi",           provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.247, lng:107.003, sekolah:655, anakUsia:105000,ibuHamil:17200 },
  { id:"JW-05", kota:"Kota Bekasi",           provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.238, lng:106.975, sekolah:485, anakUsia:77000, ibuHamil:12600 },
  { id:"JW-06", kota:"Kab. Karawang",         provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.320, lng:107.338, sekolah:398, anakUsia:64000, ibuHamil:10500 },
  { id:"JW-07", kota:"Kab. Purwakarta",       provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.557, lng:107.439, sekolah:178, anakUsia:28000, ibuHamil:4550  },
  { id:"JW-08", kota:"Kab. Subang",           provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.571, lng:107.758, sekolah:258, anakUsia:41000, ibuHamil:6650  },
  { id:"JW-09", kota:"Kab. Indramayu",        provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.327, lng:108.321, sekolah:285, anakUsia:45500, ibuHamil:7400  },
  { id:"JW-10", kota:"Kota Cirebon",          provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.706, lng:108.557, sekolah:148, anakUsia:22500, ibuHamil:3700  },
  { id:"JW-11", kota:"Kab. Cirebon",          provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.743, lng:108.521, sekolah:312, anakUsia:50000, ibuHamil:8200  },
  { id:"JW-12", kota:"Kab. Majalengka",       provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.836, lng:108.228, sekolah:215, anakUsia:34000, ibuHamil:5550  },
  { id:"JW-13", kota:"Kab. Kuningan",         provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.975, lng:108.484, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"JW-14", kota:"Kab. Sumedang",         provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.855, lng:107.921, sekolah:195, anakUsia:31000, ibuHamil:5000  },
  { id:"JW-15", kota:"Kota Depok",            provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.402, lng:106.794, sekolah:398, anakUsia:64000, ibuHamil:10500 },
  { id:"JW-16", kota:"Kota Sukabumi",         provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.922, lng:106.930, sekolah:112, anakUsia:17000, ibuHamil:2750  },
  { id:"JW-17", kota:"Kab. Sukabumi",         provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.843, lng:106.683, sekolah:365, anakUsia:58000, ibuHamil:9500  },
  { id:"JW-18", kota:"Kab. Cianjur",          provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.825, lng:107.144, sekolah:312, anakUsia:50000, ibuHamil:8150  },
  { id:"JW-19", kota:"Kota Tasikmalaya",      provinsi:"Jawa Barat", provinsiId:"JW", lat:-7.327, lng:108.220, sekolah:215, anakUsia:34000, ibuHamil:5550  },
  { id:"JW-20", kota:"Kab. Tasikmalaya",      provinsi:"Jawa Barat", provinsiId:"JW", lat:-7.285, lng:108.158, sekolah:285, anakUsia:45500, ibuHamil:7400  },
  { id:"JW-21", kota:"Kab. Garut",            provinsi:"Jawa Barat", provinsiId:"JW", lat:-7.229, lng:107.904, sekolah:345, anakUsia:55000, ibuHamil:9000  },
  { id:"JW-22", kota:"Kota Cimahi",           provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.872, lng:107.539, sekolah:148, anakUsia:22500, ibuHamil:3700  },
  { id:"JW-23", kota:"Kab. Bandung",          provinsi:"Jawa Barat", provinsiId:"JW", lat:-7.075, lng:107.584, sekolah:465, anakUsia:74000, ibuHamil:12100 },
  { id:"JW-24", kota:"Kab. Bandung Barat",    provinsi:"Jawa Barat", provinsiId:"JW", lat:-6.834, lng:107.467, sekolah:265, anakUsia:42000, ibuHamil:6850  },
  { id:"JW-25", kota:"Kota Banjar",           provinsi:"Jawa Barat", provinsiId:"JW", lat:-7.365, lng:108.539, sekolah:78,  anakUsia:11500, ibuHamil:1870  },

  // ── JAWA TENGAH ───────────────────────────────────────────────────────────
  { id:"JT-01", kota:"Kota Semarang",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.966, lng:110.416, sekolah:585, anakUsia:94000, ibuHamil:15400 },
  { id:"JT-02", kota:"Kab. Semarang",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.069, lng:110.416, sekolah:265, anakUsia:42000, ibuHamil:6850  },
  { id:"JT-03", kota:"Kab. Demak",            provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.894, lng:110.638, sekolah:215, anakUsia:34000, ibuHamil:5550  },
  { id:"JT-04", kota:"Kab. Kendal",           provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.924, lng:110.200, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"JT-05", kota:"Kota Salatiga",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.331, lng:110.508, sekolah:95,  anakUsia:14200, ibuHamil:2300  },
  { id:"JT-06", kota:"Kab. Boyolali",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.531, lng:110.600, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"JT-07", kota:"Kota Solo",             provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.576, lng:110.826, sekolah:248, anakUsia:39000, ibuHamil:6400  },
  { id:"JT-08", kota:"Kab. Sukoharjo",        provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.686, lng:110.839, sekolah:175, anakUsia:27500, ibuHamil:4450  },
  { id:"JT-09", kota:"Kab. Karanganyar",      provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.597, lng:111.029, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JT-10", kota:"Kab. Wonogiri",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.815, lng:110.924, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JT-11", kota:"Kab. Klaten",           provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.706, lng:110.599, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JT-12", kota:"Kab. Sragen",           provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.427, lng:111.018, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"JT-13", kota:"Kab. Grobogan",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.023, lng:111.014, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JT-14", kota:"Kab. Blora",            provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.962, lng:111.414, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JT-15", kota:"Kab. Rembang",          provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.714, lng:111.337, sekolah:152, anakUsia:24000, ibuHamil:3900  },
  { id:"JT-16", kota:"Kab. Pati",             provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.750, lng:111.038, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JT-17", kota:"Kab. Kudus",            provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.804, lng:110.836, sekolah:175, anakUsia:27500, ibuHamil:4450  },
  { id:"JT-18", kota:"Kab. Jepara",           provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.593, lng:110.668, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JT-19", kota:"Kab. Purworejo",        provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.717, lng:109.996, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JT-20", kota:"Kab. Kebumen",          provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.665, lng:109.652, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JT-21", kota:"Kab. Magelang",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.472, lng:110.218, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JT-22", kota:"Kota Magelang",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.470, lng:110.218, sekolah:95,  anakUsia:14200, ibuHamil:2300  },
  { id:"JT-23", kota:"Kab. Temanggung",       provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.326, lng:110.178, sekolah:165, anakUsia:26000, ibuHamil:4200  },
  { id:"JT-24", kota:"Kab. Wonosobo",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.361, lng:109.906, sekolah:175, anakUsia:27500, ibuHamil:4450  },
  { id:"JT-25", kota:"Kab. Banjarnegara",     provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.393, lng:109.692, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JT-26", kota:"Kab. Purbalingga",      provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.389, lng:109.362, sekolah:175, anakUsia:27500, ibuHamil:4450  },
  { id:"JT-27", kota:"Kab. Banyumas",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.509, lng:109.296, sekolah:285, anakUsia:45500, ibuHamil:7400  },
  { id:"JT-28", kota:"Kota Purwokerto",       provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.421, lng:109.235, sekolah:145, anakUsia:22000, ibuHamil:3600  },
  { id:"JT-29", kota:"Kab. Cilacap",          provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.731, lng:109.016, sekolah:312, anakUsia:50000, ibuHamil:8150  },
  { id:"JT-30", kota:"Kab. Brebes",           provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.873, lng:109.040, sekolah:298, anakUsia:47500, ibuHamil:7750  },
  { id:"JT-31", kota:"Kota Tegal",            provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.869, lng:109.125, sekolah:112, anakUsia:17000, ibuHamil:2750  },
  { id:"JT-32", kota:"Kab. Tegal",            provinsi:"Jawa Tengah", provinsiId:"JT", lat:-7.046, lng:109.135, sekolah:258, anakUsia:41000, ibuHamil:6650  },
  { id:"JT-33", kota:"Kab. Pemalang",         provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.888, lng:109.381, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JT-34", kota:"Kab. Pekalongan",       provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.987, lng:109.675, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"JT-35", kota:"Kota Pekalongan",       provinsi:"Jawa Tengah", provinsiId:"JT", lat:-6.888, lng:109.675, sekolah:108, anakUsia:16500, ibuHamil:2700  },

  // ── DI YOGYAKARTA ─────────────────────────────────────────────────────────
  { id:"YO-01", kota:"Kota Yogyakarta",       provinsi:"DI Yogyakarta", provinsiId:"YO", lat:-7.797, lng:110.371, sekolah:248, anakUsia:38000, ibuHamil:6200 },
  { id:"YO-02", kota:"Kab. Sleman",           provinsi:"DI Yogyakarta", provinsiId:"YO", lat:-7.714, lng:110.355, sekolah:265, anakUsia:42000, ibuHamil:6850 },
  { id:"YO-03", kota:"Kab. Bantul",           provinsi:"DI Yogyakarta", provinsiId:"YO", lat:-7.888, lng:110.328, sekolah:232, anakUsia:37000, ibuHamil:6000 },
  { id:"YO-04", kota:"Kab. Kulon Progo",      provinsi:"DI Yogyakarta", provinsiId:"YO", lat:-7.823, lng:110.158, sekolah:148, anakUsia:23000, ibuHamil:3750 },
  { id:"YO-05", kota:"Kab. Gunungkidul",      provinsi:"DI Yogyakarta", provinsiId:"YO", lat:-7.960, lng:110.614, sekolah:198, anakUsia:31000, ibuHamil:5050 },

  // ── JAWA TIMUR ────────────────────────────────────────────────────────────
  { id:"JI-01", kota:"Kota Surabaya",         provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.257, lng:112.752, sekolah:785, anakUsia:126000,ibuHamil:20700 },
  { id:"JI-02", kota:"Kab. Sidoarjo",         provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.446, lng:112.718, sekolah:445, anakUsia:71000, ibuHamil:11600 },
  { id:"JI-03", kota:"Kab. Gresik",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.157, lng:112.651, sekolah:285, anakUsia:45500, ibuHamil:7400  },
  { id:"JI-04", kota:"Kab. Mojokerto",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.470, lng:112.434, sekolah:198, anakUsia:31500, ibuHamil:5100  },
  { id:"JI-05", kota:"Kota Mojokerto",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.471, lng:112.434, sekolah:88,  anakUsia:13200, ibuHamil:2150  },
  { id:"JI-06", kota:"Kota Malang",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.983, lng:112.621, sekolah:345, anakUsia:55000, ibuHamil:9000  },
  { id:"JI-07", kota:"Kab. Malang",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.164, lng:112.641, sekolah:445, anakUsia:71000, ibuHamil:11600 },
  { id:"JI-08", kota:"Kota Batu",             provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.868, lng:112.529, sekolah:78,  anakUsia:11500, ibuHamil:1870  },
  { id:"JI-09", kota:"Kab. Pasuruan",         provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.648, lng:112.907, sekolah:285, anakUsia:45500, ibuHamil:7400  },
  { id:"JI-10", kota:"Kota Pasuruan",         provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.648, lng:112.907, sekolah:95,  anakUsia:14200, ibuHamil:2300  },
  { id:"JI-11", kota:"Kab. Probolinggo",      provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.757, lng:113.215, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JI-12", kota:"Kota Probolinggo",      provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.753, lng:113.215, sekolah:88,  anakUsia:13200, ibuHamil:2150  },
  { id:"JI-13", kota:"Kab. Jember",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.173, lng:113.701, sekolah:368, anakUsia:59000, ibuHamil:9650  },
  { id:"JI-14", kota:"Kab. Banyuwangi",       provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.219, lng:114.369, sekolah:325, anakUsia:52000, ibuHamil:8500  },
  { id:"JI-15", kota:"Kab. Bondowoso",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.912, lng:113.820, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JI-16", kota:"Kab. Situbondo",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.706, lng:113.997, sekolah:165, anakUsia:26000, ibuHamil:4200  },
  { id:"JI-17", kota:"Kab. Jombang",          provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.546, lng:112.234, sekolah:265, anakUsia:42000, ibuHamil:6850  },
  { id:"JI-18", kota:"Kab. Nganjuk",          provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.605, lng:111.891, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JI-19", kota:"Kab. Kediri",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.818, lng:112.015, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JI-20", kota:"Kota Kediri",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.818, lng:112.015, sekolah:112, anakUsia:17000, ibuHamil:2750  },
  { id:"JI-21", kota:"Kab. Blitar",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.099, lng:112.199, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JI-22", kota:"Kota Blitar",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.099, lng:112.199, sekolah:78,  anakUsia:11500, ibuHamil:1870  },
  { id:"JI-23", kota:"Kab. Tulungagung",      provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.066, lng:111.903, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JI-24", kota:"Kab. Trenggalek",       provinsi:"Jawa Timur", provinsiId:"JI", lat:-8.046, lng:111.718, sekolah:175, anakUsia:27500, ibuHamil:4450  },
  { id:"JI-25", kota:"Kab. Ponorogo",         provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.866, lng:111.461, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"JI-26", kota:"Kab. Madiun",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.629, lng:111.523, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JI-27", kota:"Kota Madiun",           provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.629, lng:111.523, sekolah:88,  anakUsia:13200, ibuHamil:2150  },
  { id:"JI-28", kota:"Kab. Magetan",          provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.648, lng:111.329, sekolah:155, anakUsia:24000, ibuHamil:3900  },
  { id:"JI-29", kota:"Kab. Ngawi",            provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.401, lng:111.448, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JI-30", kota:"Kab. Bojonegoro",       provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.150, lng:111.882, sekolah:265, anakUsia:42000, ibuHamil:6850  },
  { id:"JI-31", kota:"Kab. Tuban",            provinsi:"Jawa Timur", provinsiId:"JI", lat:-6.900, lng:112.044, sekolah:232, anakUsia:37000, ibuHamil:6000  },
  { id:"JI-32", kota:"Kab. Lamongan",         provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.120, lng:112.415, sekolah:248, anakUsia:39000, ibuHamil:6350  },
  { id:"JI-33", kota:"Kab. Bangkalan",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.032, lng:113.060, sekolah:175, anakUsia:27500, ibuHamil:4450  },
  { id:"JI-34", kota:"Kab. Sampang",          provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.195, lng:113.249, sekolah:165, anakUsia:26000, ibuHamil:4200  },
  { id:"JI-35", kota:"Kab. Pamekasan",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.159, lng:113.481, sekolah:165, anakUsia:26000, ibuHamil:4200  },
  { id:"JI-36", kota:"Kab. Sumenep",          provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.016, lng:113.852, sekolah:185, anakUsia:29000, ibuHamil:4700  },
  { id:"JI-37", kota:"Kota Mojokerto",        provinsi:"Jawa Timur", provinsiId:"JI", lat:-7.471, lng:112.434, sekolah:88,  anakUsia:13200, ibuHamil:2150  },

  // ── BALI ──────────────────────────────────────────────────────────────────
  { id:"BA-01", kota:"Kota Denpasar",         provinsi:"Bali", provinsiId:"BA", lat:-8.650, lng:115.216, sekolah:265, anakUsia:42000, ibuHamil:6850 },
  { id:"BA-02", kota:"Kab. Badung",           provinsi:"Bali", provinsiId:"BA", lat:-8.617, lng:115.176, sekolah:185, anakUsia:29000, ibuHamil:4700 },
  { id:"BA-03", kota:"Kab. Gianyar",          provinsi:"Bali", provinsiId:"BA", lat:-8.537, lng:115.332, sekolah:148, anakUsia:23000, ibuHamil:3750 },
  { id:"BA-04", kota:"Kab. Tabanan",          provinsi:"Bali", provinsiId:"BA", lat:-8.541, lng:115.126, sekolah:145, anakUsia:22000, ibuHamil:3580 },
  { id:"BA-05", kota:"Kab. Buleleng",         provinsi:"Bali", provinsiId:"BA", lat:-8.112, lng:115.089, sekolah:198, anakUsia:31500, ibuHamil:5100 },
  { id:"BA-06", kota:"Kab. Jembrana",         provinsi:"Bali", provinsiId:"BA", lat:-8.351, lng:114.636, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"BA-07", kota:"Kab. Klungkung",        provinsi:"Bali", provinsiId:"BA", lat:-8.544, lng:115.404, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"BA-08", kota:"Kab. Bangli",           provinsi:"Bali", provinsiId:"BA", lat:-8.454, lng:115.357, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"BA-09", kota:"Kab. Karangasem",       provinsi:"Bali", provinsiId:"BA", lat:-8.450, lng:115.611, sekolah:128, anakUsia:19500, ibuHamil:3150 },

  // ── NUSA TENGGARA BARAT ───────────────────────────────────────────────────
  { id:"NB-01", kota:"Kota Mataram",          provinsi:"NTB", provinsiId:"NB", lat:-8.585, lng:116.118, sekolah:198, anakUsia:31000, ibuHamil:5050 },
  { id:"NB-02", kota:"Kab. Lombok Barat",     provinsi:"NTB", provinsiId:"NB", lat:-8.627, lng:116.091, sekolah:165, anakUsia:26000, ibuHamil:4200 },
  { id:"NB-03", kota:"Kab. Lombok Tengah",    provinsi:"NTB", provinsiId:"NB", lat:-8.720, lng:116.281, sekolah:198, anakUsia:31500, ibuHamil:5100 },
  { id:"NB-04", kota:"Kab. Lombok Timur",     provinsi:"NTB", provinsiId:"NB", lat:-8.618, lng:116.547, sekolah:248, anakUsia:39000, ibuHamil:6350 },
  { id:"NB-05", kota:"Kab. Sumbawa",          provinsi:"NTB", provinsiId:"NB", lat:-8.489, lng:117.418, sekolah:165, anakUsia:26000, ibuHamil:4200 },
  { id:"NB-06", kota:"Kota Bima",             provinsi:"NTB", provinsiId:"NB", lat:-8.462, lng:118.726, sekolah:95,  anakUsia:14200, ibuHamil:2300 },
  { id:"NB-07", kota:"Kab. Dompu",            provinsi:"NTB", provinsiId:"NB", lat:-8.536, lng:118.462, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"NB-08", kota:"Kab. Bima",             provinsi:"NTB", provinsiId:"NB", lat:-8.629, lng:118.726, sekolah:145, anakUsia:22000, ibuHamil:3580 },

  // ── NUSA TENGGARA TIMUR ───────────────────────────────────────────────────
  { id:"NT-01", kota:"Kota Kupang",           provinsi:"NTT", provinsiId:"NT", lat:-10.175, lng:123.608, sekolah:145, anakUsia:22000, ibuHamil:3580 },
  { id:"NT-02", kota:"Kab. Kupang",           provinsi:"NTT", provinsiId:"NT", lat:-10.160, lng:123.608, sekolah:165, anakUsia:26000, ibuHamil:4200 },
  { id:"NT-03", kota:"Kab. Ende",             provinsi:"NTT", provinsiId:"NT", lat:-8.838, lng:121.660, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"NT-04", kota:"Kab. Manggarai",        provinsi:"NTT", provinsiId:"NT", lat:-8.602, lng:120.485, sekolah:148, anakUsia:23000, ibuHamil:3750 },
  { id:"NT-05", kota:"Kab. Sikka",            provinsi:"NTT", provinsiId:"NT", lat:-8.623, lng:122.219, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"NT-06", kota:"Kab. Flores Timur",     provinsi:"NTT", provinsiId:"NT", lat:-8.430, lng:122.981, sekolah:95,  anakUsia:14200, ibuHamil:2300 },
  { id:"NT-07", kota:"Kab. Sumba Timur",      provinsi:"NTT", provinsiId:"NT", lat:-9.655, lng:120.267, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"NT-08", kota:"Kab. Timor Tengah Sel.",provinsi:"NTT", provinsiId:"NT", lat:-9.730, lng:124.228, sekolah:112, anakUsia:17000, ibuHamil:2750 },

  // ── KALIMANTAN BARAT ──────────────────────────────────────────────────────
  { id:"KB-01", kota:"Kota Pontianak",        provinsi:"Kalimantan Barat", provinsiId:"KB", lat:-0.022, lng:109.342, sekolah:265, anakUsia:42000, ibuHamil:6850 },
  { id:"KB-02", kota:"Kab. Kubu Raya",        provinsi:"Kalimantan Barat", provinsiId:"KB", lat:-0.219, lng:109.380, sekolah:185, anakUsia:29000, ibuHamil:4700 },
  { id:"KB-03", kota:"Kab. Mempawah",         provinsi:"Kalimantan Barat", provinsiId:"KB", lat:0.299,  lng:108.960, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"KB-04", kota:"Kab. Sambas",           provinsi:"Kalimantan Barat", provinsiId:"KB", lat:1.365,  lng:109.302, sekolah:148, anakUsia:23000, ibuHamil:3750 },
  { id:"KB-05", kota:"Kota Singkawang",       provinsi:"Kalimantan Barat", provinsiId:"KB", lat:0.908,  lng:108.992, sekolah:95,  anakUsia:14200, ibuHamil:2300 },
  { id:"KB-06", kota:"Kab. Ketapang",         provinsi:"Kalimantan Barat", provinsiId:"KB", lat:-1.841, lng:109.983, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"KB-07", kota:"Kab. Sintang",          provinsi:"Kalimantan Barat", provinsiId:"KB", lat:0.063,  lng:111.477, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"KB-08", kota:"Kab. Kapuas Hulu",      provinsi:"Kalimantan Barat", provinsiId:"KB", lat:0.817,  lng:113.938, sekolah:95,  anakUsia:14200, ibuHamil:2300 },

  // ── KALIMANTAN TENGAH ─────────────────────────────────────────────────────
  { id:"KT-01", kota:"Kota Palangka Raya",    provinsi:"Kalimantan Tengah", provinsiId:"KT", lat:-2.208, lng:113.916, sekolah:145, anakUsia:22000, ibuHamil:3580 },
  { id:"KT-02", kota:"Kab. Kotawaringin Bar.",provinsi:"Kalimantan Tengah", provinsiId:"KT", lat:-2.699, lng:111.681, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"KT-03", kota:"Kab. Kapuas",           provinsi:"Kalimantan Tengah", provinsiId:"KT", lat:-2.014, lng:114.270, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"KT-04", kota:"Kab. Barito Selatan",   provinsi:"Kalimantan Tengah", provinsiId:"KT", lat:-1.860, lng:114.750, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"KT-05", kota:"Kab. Barito Utara",     provinsi:"Kalimantan Tengah", provinsiId:"KT", lat:-0.997, lng:115.001, sekolah:78,  anakUsia:11500, ibuHamil:1870 },

  // ── KALIMANTAN SELATAN ────────────────────────────────────────────────────
  { id:"KS-01", kota:"Kota Banjarmasin",      provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-3.317, lng:114.591, sekolah:215, anakUsia:34000, ibuHamil:5550 },
  { id:"KS-02", kota:"Kota Banjarbaru",       provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-3.443, lng:114.833, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"KS-03", kota:"Kab. Banjar",           provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-3.489, lng:114.854, sekolah:165, anakUsia:26000, ibuHamil:4200 },
  { id:"KS-04", kota:"Kab. Tanah Laut",       provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-3.728, lng:115.010, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"KS-05", kota:"Kab. Barito Kuala",     provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-2.888, lng:114.581, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"KS-06", kota:"Kab. Hulu Sungai Sel.", provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-2.515, lng:115.403, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"KS-07", kota:"Kab. Tabalong",         provinsi:"Kalimantan Selatan", provinsiId:"KS", lat:-2.034, lng:115.357, sekolah:95,  anakUsia:14200, ibuHamil:2300 },

  // ── KALIMANTAN TIMUR ──────────────────────────────────────────────────────
  { id:"KE-01", kota:"Kota Samarinda",        provinsi:"Kalimantan Timur", provinsiId:"KE", lat:-0.502, lng:117.153, sekolah:248, anakUsia:39000, ibuHamil:6350 },
  { id:"KE-02", kota:"Kota Balikpapan",       provinsi:"Kalimantan Timur", provinsiId:"KE", lat:-1.264, lng:116.831, sekolah:215, anakUsia:34000, ibuHamil:5550 },
  { id:"KE-03", kota:"Kab. Kutai Kartanegara",provinsi:"Kalimantan Timur", provinsiId:"KE", lat:-0.459, lng:117.015, sekolah:198, anakUsia:31500, ibuHamil:5100 },
  { id:"KE-04", kota:"Kota Bontang",          provinsi:"Kalimantan Timur", provinsiId:"KE", lat:0.132,  lng:117.499, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"KE-05", kota:"Kab. Berau",            provinsi:"Kalimantan Timur", provinsiId:"KE", lat:2.155,  lng:117.435, sekolah:95,  anakUsia:14200, ibuHamil:2300 },
  { id:"KE-06", kota:"Kab. Penajam Paser Ut.",provinsi:"Kalimantan Timur", provinsiId:"KE", lat:-1.264, lng:116.569, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"KE-07", kota:"Kota Nusantara (IKN)",  provinsi:"Kalimantan Timur", provinsiId:"KE", lat:-1.000, lng:116.700, sekolah:15,  anakUsia:2200,  ibuHamil:350  },

  // ── KALIMANTAN UTARA ──────────────────────────────────────────────────────
  { id:"KU-01", kota:"Kota Tarakan",          provinsi:"Kalimantan Utara", provinsiId:"KU", lat:3.297,  lng:117.625, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"KU-02", kota:"Kab. Bulungan",         provinsi:"Kalimantan Utara", provinsiId:"KU", lat:2.825,  lng:117.387, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },
  { id:"KU-03", kota:"Kab. Nunukan",          provinsi:"Kalimantan Utara", provinsiId:"KU", lat:4.136,  lng:117.666, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"KU-04", kota:"Kab. Malinau",          provinsi:"Kalimantan Utara", provinsiId:"KU", lat:3.574,  lng:116.632, sekolah:42,  anakUsia:6200,  ibuHamil:1000 },

  // ── SULAWESI UTARA ────────────────────────────────────────────────────────
  { id:"SA-01", kota:"Kota Manado",           provinsi:"Sulawesi Utara", provinsiId:"SA", lat:1.474,  lng:124.842, sekolah:198, anakUsia:31000, ibuHamil:5050 },
  { id:"SA-02", kota:"Kota Bitung",           provinsi:"Sulawesi Utara", provinsiId:"SA", lat:1.440,  lng:125.198, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"SA-03", kota:"Kab. Minahasa",         provinsi:"Sulawesi Utara", provinsiId:"SA", lat:1.300,  lng:124.850, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"SA-04", kota:"Kota Tomohon",          provinsi:"Sulawesi Utara", provinsiId:"SA", lat:1.334,  lng:124.843, sekolah:58,  anakUsia:8500,  ibuHamil:1380 },
  { id:"SA-05", kota:"Kab. Bolaang Mongondow",provinsi:"Sulawesi Utara", provinsiId:"SA", lat:0.608,  lng:124.001, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"SA-06", kota:"Kab. Kepulauan Sangihe",provinsi:"Sulawesi Utara", provinsiId:"SA", lat:3.567,  lng:125.517, sekolah:62,  anakUsia:9200,  ibuHamil:1490 },

  // ── SULAWESI TENGAH ───────────────────────────────────────────────────────
  { id:"ST-01", kota:"Kota Palu",             provinsi:"Sulawesi Tengah", provinsiId:"ST", lat:-0.900, lng:119.870, sekolah:165, anakUsia:26000, ibuHamil:4200 },
  { id:"ST-02", kota:"Kab. Donggala",         provinsi:"Sulawesi Tengah", provinsiId:"ST", lat:-0.673, lng:119.731, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"ST-03", kota:"Kab. Sigi",             provinsi:"Sulawesi Tengah", provinsiId:"ST", lat:-1.151, lng:119.932, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"ST-04", kota:"Kab. Parigi Moutong",   provinsi:"Sulawesi Tengah", provinsiId:"ST", lat:-0.519, lng:120.745, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"ST-05", kota:"Kab. Poso",             provinsi:"Sulawesi Tengah", provinsiId:"ST", lat:-1.390, lng:120.757, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"ST-06", kota:"Kab. Tojo Una-Una",     provinsi:"Sulawesi Tengah", provinsiId:"ST", lat:-0.682, lng:121.823, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },

  // ── SULAWESI SELATAN ──────────────────────────────────────────────────────
  { id:"SL-01", kota:"Kota Makassar",         provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-5.147, lng:119.432, sekolah:465, anakUsia:74000, ibuHamil:12100 },
  { id:"SL-02", kota:"Kab. Gowa",             provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-5.267, lng:119.700, sekolah:215, anakUsia:34000, ibuHamil:5550  },
  { id:"SL-03", kota:"Kab. Maros",            provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-5.023, lng:119.582, sekolah:128, anakUsia:19500, ibuHamil:3150  },
  { id:"SL-04", kota:"Kab. Pangkep",          provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-4.859, lng:119.529, sekolah:112, anakUsia:17000, ibuHamil:2750  },
  { id:"SL-05", kota:"Kab. Bone",             provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-4.535, lng:120.353, sekolah:215, anakUsia:34000, ibuHamil:5500  },
  { id:"SL-06", kota:"Kota Parepare",         provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-4.013, lng:119.632, sekolah:88,  anakUsia:13200, ibuHamil:2150  },
  { id:"SL-07", kota:"Kab. Wajo",             provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-3.990, lng:120.277, sekolah:145, anakUsia:22000, ibuHamil:3580  },
  { id:"SL-08", kota:"Kab. Luwu",             provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-2.870, lng:121.120, sekolah:128, anakUsia:19500, ibuHamil:3150  },
  { id:"SL-09", kota:"Kota Palopo",           provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-2.999, lng:120.197, sekolah:88,  anakUsia:13200, ibuHamil:2150  },
  { id:"SL-10", kota:"Kab. Takalar",          provinsi:"Sulawesi Selatan", provinsiId:"SL", lat:-5.438, lng:119.453, sekolah:95,  anakUsia:14200, ibuHamil:2300  },

  // ── SULAWESI TENGGARA ─────────────────────────────────────────────────────
  { id:"SG-01", kota:"Kota Kendari",          provinsi:"Sulawesi Tenggara", provinsiId:"SG", lat:-3.972, lng:122.514, sekolah:145, anakUsia:22000, ibuHamil:3580 },
  { id:"SG-02", kota:"Kota Baubau",           provinsi:"Sulawesi Tenggara", provinsiId:"SG", lat:-5.467, lng:122.617, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"SG-03", kota:"Kab. Kolaka",           provinsi:"Sulawesi Tenggara", provinsiId:"SG", lat:-4.059, lng:121.591, sekolah:95,  anakUsia:14200, ibuHamil:2300 },
  { id:"SG-04", kota:"Kab. Konawe",           provinsi:"Sulawesi Tenggara", provinsiId:"SG", lat:-3.907, lng:122.300, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"SG-05", kota:"Kab. Muna",             provinsi:"Sulawesi Tenggara", provinsiId:"SG", lat:-4.876, lng:122.584, sekolah:78,  anakUsia:11500, ibuHamil:1870 },
  { id:"SG-06", kota:"Kab. Buton",            provinsi:"Sulawesi Tenggara", provinsiId:"SG", lat:-5.543, lng:122.758, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },

  // ── GORONTALO ─────────────────────────────────────────────────────────────
  { id:"GO-01", kota:"Kota Gorontalo",        provinsi:"Gorontalo", provinsiId:"GO", lat:0.537,  lng:123.061, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"GO-02", kota:"Kab. Gorontalo",        provinsi:"Gorontalo", provinsiId:"GO", lat:0.560,  lng:122.882, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"GO-03", kota:"Kab. Bone Bolango",     provinsi:"Gorontalo", provinsiId:"GO", lat:0.614,  lng:123.254, sekolah:78,  anakUsia:11500, ibuHamil:1870 },
  { id:"GO-04", kota:"Kab. Pohuwato",         provinsi:"Gorontalo", provinsiId:"GO", lat:0.377,  lng:121.835, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"GO-05", kota:"Kab. Boalemo",          provinsi:"Gorontalo", provinsiId:"GO", lat:0.434,  lng:122.443, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },

  // ── SULAWESI BARAT ────────────────────────────────────────────────────────
  { id:"SW-01", kota:"Kota Mamuju",           provinsi:"Sulawesi Barat", provinsiId:"SW", lat:-2.679, lng:118.887, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"SW-02", kota:"Kab. Polewali Mandar",  provinsi:"Sulawesi Barat", provinsiId:"SW", lat:-3.413, lng:119.325, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"SW-03", kota:"Kab. Majene",           provinsi:"Sulawesi Barat", provinsiId:"SW", lat:-3.541, lng:118.967, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },
  { id:"SW-04", kota:"Kab. Mamasa",           provinsi:"Sulawesi Barat", provinsiId:"SW", lat:-3.038, lng:119.373, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"SW-05", kota:"Kab. Pasangkayu",       provinsi:"Sulawesi Barat", provinsiId:"SW", lat:-1.273, lng:119.774, sekolah:52,  anakUsia:7800,  ibuHamil:1260 },

  // ── MALUKU ────────────────────────────────────────────────────────────────
  { id:"MA-01", kota:"Kota Ambon",            provinsi:"Maluku", provinsiId:"MA", lat:-3.695, lng:128.181, sekolah:112, anakUsia:17000, ibuHamil:2750 },
  { id:"MA-02", kota:"Kab. Maluku Tengah",    provinsi:"Maluku", provinsiId:"MA", lat:-3.191, lng:128.983, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"MA-03", kota:"Kab. Maluku Tenggara",  provinsi:"Maluku", provinsiId:"MA", lat:-5.650, lng:132.743, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },
  { id:"MA-04", kota:"Kota Tual",             provinsi:"Maluku", provinsiId:"MA", lat:-5.671, lng:132.756, sekolah:42,  anakUsia:6200,  ibuHamil:1000 },
  { id:"MA-05", kota:"Kab. Seram Bagian Bar.",provinsi:"Maluku", provinsiId:"MA", lat:-3.163, lng:128.263, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"MA-06", kota:"Kab. Buru",             provinsi:"Maluku", provinsiId:"MA", lat:-3.452, lng:126.753, sekolah:52,  anakUsia:7800,  ibuHamil:1260 },

  // ── MALUKU UTARA ──────────────────────────────────────────────────────────
  { id:"MU-01", kota:"Kota Ternate",          provinsi:"Maluku Utara", provinsiId:"MU", lat:0.787,  lng:127.374, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"MU-02", kota:"Kota Tidore Kep.",      provinsi:"Maluku Utara", provinsiId:"MU", lat:0.677,  lng:127.407, sekolah:58,  anakUsia:8500,  ibuHamil:1380 },
  { id:"MU-03", kota:"Kab. Halmahera Utara",  provinsi:"Maluku Utara", provinsiId:"MU", lat:1.660,  lng:128.026, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },
  { id:"MU-04", kota:"Kab. Halmahera Tengah", provinsi:"Maluku Utara", provinsiId:"MU", lat:0.497,  lng:128.060, sekolah:42,  anakUsia:6200,  ibuHamil:1000 },
  { id:"MU-05", kota:"Kab. Halmahera Selatan",provinsi:"Maluku Utara", provinsiId:"MU", lat:-0.513, lng:127.636, sekolah:52,  anakUsia:7800,  ibuHamil:1260 },

  // ── PAPUA BARAT ───────────────────────────────────────────────────────────
  { id:"PB-01", kota:"Kota Manokwari",        provinsi:"Papua Barat", provinsiId:"PB", lat:-0.862, lng:134.079, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"PB-02", kota:"Kota Sorong",           provinsi:"Papua Barat", provinsiId:"PB", lat:-0.876, lng:131.248, sekolah:78,  anakUsia:11500, ibuHamil:1870 },
  { id:"PB-03", kota:"Kab. Sorong",           provinsi:"Papua Barat", provinsiId:"PB", lat:-0.881, lng:131.249, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"PB-04", kota:"Kab. Fakfak",           provinsi:"Papua Barat", provinsiId:"PB", lat:-2.919, lng:132.304, sekolah:42,  anakUsia:6200,  ibuHamil:1000 },
  { id:"PB-05", kota:"Kab. Teluk Bintuni",    provinsi:"Papua Barat", provinsiId:"PB", lat:-2.099, lng:133.527, sekolah:38,  anakUsia:5500,  ibuHamil:890  },

  // ── PAPUA ─────────────────────────────────────────────────────────────────
  { id:"PA-01", kota:"Kota Jayapura",         provinsi:"Papua", provinsiId:"PA", lat:-2.533, lng:140.718, sekolah:128, anakUsia:19500, ibuHamil:3150 },
  { id:"PA-02", kota:"Kab. Jayapura",         provinsi:"Papua", provinsiId:"PA", lat:-2.536, lng:140.519, sekolah:88,  anakUsia:13200, ibuHamil:2150 },
  { id:"PA-03", kota:"Kab. Nabire",           provinsi:"Papua", provinsiId:"PA", lat:-3.370, lng:135.499, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"PA-04", kota:"Kab. Biak Numfor",      provinsi:"Papua", provinsiId:"PA", lat:-1.178, lng:136.098, sekolah:55,  anakUsia:8200,  ibuHamil:1320 },
  { id:"PA-05", kota:"Kab. Yapen",            provinsi:"Papua", provinsiId:"PA", lat:-1.750, lng:136.225, sekolah:42,  anakUsia:6200,  ibuHamil:1000 },
  { id:"PA-06", kota:"Kab. Mimika",           provinsi:"Papua", provinsiId:"PA", lat:-4.547, lng:136.408, sekolah:65,  anakUsia:9500,  ibuHamil:1550 },
  { id:"PA-07", kota:"Kab. Merauke",          provinsi:"Papua", provinsiId:"PA", lat:-8.476, lng:140.362, sekolah:52,  anakUsia:7800,  ibuHamil:1260 },
  { id:"PA-08", kota:"Kab. Jayawijaya",       provinsi:"Papua", provinsiId:"PA", lat:-3.912, lng:138.910, sekolah:42,  anakUsia:6200,  ibuHamil:1000 },
];

// ── Aggregate by provinsi ────────────────────────────────────────────────────
export interface ProvinsiData {
  provinsiId: string;
  provinsi: string;
  lat: number;
  lng: number;
  sekolah: number;
  anakUsia: number;
  ibuHamil: number;
  totalKota: number;
}

// Centre coordinates per province (approximate)
const provinsiCenter: Record<string, { lat: number; lng: number }> = {
  AC: { lat: 4.69,  lng: 96.74  },
  SU: { lat: 2.12,  lng: 99.54  },
  SB: { lat: -0.74, lng: 100.48 },
  RI: { lat: 0.53,  lng: 101.45 },
  KR: { lat: 1.09,  lng: 104.02 },
  JB_: { lat: -1.68, lng: 103.62 }, // Jambi (avoid clash with Jawa Barat key)
  SS: { lat: -3.32, lng: 103.91 },
  BE: { lat: -3.80, lng: 102.27 },
  LA: { lat: -5.35, lng: 105.05 },
  BT: { lat: -6.23, lng: 106.30 },
  JK: { lat: -6.21, lng: 106.85 },
  JW: { lat: -7.09, lng: 107.66 },
  JT: { lat: -7.15, lng: 110.14 },
  YO: { lat: -7.87, lng: 110.43 },
  JI: { lat: -7.53, lng: 112.24 },
  BA: { lat: -8.34, lng: 115.09 },
  NB: { lat: -8.65, lng: 117.36 },
  NT: { lat: -8.66, lng: 121.08 },
  KB: { lat: 0.00,  lng: 110.37 },
  KT: { lat: -1.68, lng: 113.38 },
  KS: { lat: -3.09, lng: 115.28 },
  KE: { lat: -0.44, lng: 117.14 },
  KU: { lat: 3.16,  lng: 116.89 },
  SA: { lat: 1.49,  lng: 124.85 },
  ST: { lat: -1.43, lng: 121.44 },
  SL: { lat: -3.66, lng: 119.97 },
  SG: { lat: -4.11, lng: 122.38 },
  GO: { lat: 0.54,  lng: 122.52 },
  SW: { lat: -2.90, lng: 119.39 },
  MA: { lat: -3.24, lng: 130.15 },
  MU: { lat: 0.97,  lng: 127.90 },
  PB: { lat: -1.27, lng: 132.50 },
  PA: { lat: -4.27, lng: 138.08 },
};

export const provinsiData: ProvinsiData[] = (() => {
  const map: Record<string, ProvinsiData> = {};
  for (const d of mbgData) {
    if (!map[d.provinsiId]) {
      const center = provinsiCenter[d.provinsiId] ?? { lat: d.lat, lng: d.lng };
      map[d.provinsiId] = {
        provinsiId: d.provinsiId,
        provinsi: d.provinsi,
        lat: center.lat,
        lng: center.lng,
        sekolah: 0,
        anakUsia: 0,
        ibuHamil: 0,
        totalKota: 0,
      };
    }
    map[d.provinsiId].sekolah   += d.sekolah;
    map[d.provinsiId].anakUsia  += d.anakUsia;
    map[d.provinsiId].ibuHamil  += d.ibuHamil;
    map[d.provinsiId].totalKota += 1;
  }
  // Fix Jambi key (was JB_ to avoid Jawa Barat collision in provinsiCenter)
  return Object.values(map);
})();

export const PROVINSI_LIST = [...new Set(mbgData.map(d => d.provinsi))].sort();