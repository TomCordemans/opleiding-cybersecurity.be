module.exports = {
  title: 'OPLEIDING-CYBERSECURITY-BE',
  description: 'Cybersecurity Flankerend beleid',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'IMEC-DISTRINET RESEARCH GROUP, KU Leuven', link: 'https://distrinet.cs.kuleuven.be' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/voorwoord/', 'Voorwoord'],
      ['/inleiding/', 'Inleiding'],
      ['/basisbegrippen/', 'Basisbegrippen'],
      ['/bootcamp-wireshark/', 'Bootcamp Wireshark'],
      ['/threat-analysis/', 'Threat Analysis']
    ],
    repo: 'https://github.com/TomCordemans/opleiding-cybersecurity.be',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
