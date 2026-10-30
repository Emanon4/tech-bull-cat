(() => {
  'use strict';
  const copy = {
    zh: {gallery:'作品放映室',profile:'历史版本',contact:'商务合作',note:'历史版本存档：本页数据与联系方式仅作历史记录。当前介绍与商务合作请返回官网。',title:'科创大牛猫 · 历史版本'},
    en: {gallery:'Screening room',profile:'Historical site',contact:'Collaborate',note:'Historical archive: figures and contact details on this page are historical records. Return to the main website for the current profile and business contact.',title:'Tech Bull Cat · Historical archive'},
    ja: {gallery:'作品上映室',profile:'過去のサイト',contact:'お問い合わせ',note:'過去のサイトの記録です。数値と連絡先は当時のものです。現在のプロフィールとお問い合わせ先は公式サイトをご覧ください。',title:'科創大牛猫 · 過去のサイト'}
  };
  function apply(lang) {
    const value = copy[lang] || copy.zh;
    document.querySelectorAll('[data-site-i18n]').forEach(el => {el.textContent = value[el.dataset.siteI18n];});
    document.title = value.title;
  }
  document.querySelectorAll('.lang [data-lang]').forEach(button => button.addEventListener('click',() => apply(button.dataset.lang)));
  apply(document.documentElement.lang);
})();
