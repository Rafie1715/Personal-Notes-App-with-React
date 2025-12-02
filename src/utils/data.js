const getInitialData = () => ([
  {
    id: 'notes-1',
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-2',
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Kenapa functional component lebih disukai? Karena lebih sederhana, mudah dibaca, dan mudah diuji.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-3',
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan strategi untuk memecah kode menjadi bagian-bagian kecil yang independen. Perhatikan gambar berikut.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-4',
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang akan dipanggil pada masing-masing state perubahan mulai dari pembuatan component, proses render, hingga component tersebut dihancurkan.",
    archived: true,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-5',
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript yang dibawa sejak ES6 (ECMAScript 2015).",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
  {
    id: 'notes-6',
    title: "Module Bundler",
    body: "Dalam konteks pengembangan aplikasi JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };