(() => {
  'use strict';
  const copy = {
    zh: {gallery:'作品放映室',profile:'账号介绍',contact:'商务合作',note:'原官网完整保留。数据与联系方式沿用原版，当前合作信息请查看作品放映室。',title:'科创大牛猫 · 账号介绍'},
    en: {gallery:'Screening room',profile:'Profile',contact:'Collaborate',note:'The original website is preserved in full. Figures and contact details follow the original version; visit the screening room for current collaboration details.',title:'Tech Bull Cat · Profile'},
    ja: {gallery:'作品上映室',profile:'プロフィール',contact:'お問い合わせ',note:'旧公式サイトをそのまま保存しています。数値と連絡先は当時のものです。現在のお問い合わせ先は作品上映室をご覧ください。',title:'科創大牛猫 · プロフィール'}
  };
  function apply(lang) {
    const value = copy[lang] || copy.zh;
    document.querySelectorAll('[data-site-i18n]').forEach(el => {el.textContent = value[el.dataset.siteI18n];});
    document.title = value.title;
  }
  document.querySelectorAll('.lang [data-lang]').forEach(button => button.addEventListener('click',() => apply(button.dataset.lang)));
  apply(document.documentElement.lang);
})();
