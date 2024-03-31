---
---

{% assign inset = site.data.tailwind['inset'] %}

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      inset: {
        '75per': '{{ inset.seventy_five }}',
        '50per': '50%',
        '25per': '25%',
      }
    }
  }
}
