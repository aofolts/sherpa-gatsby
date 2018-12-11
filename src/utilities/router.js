module.exports = {
  getPagePath: page => {
    let base = ''
    let slug = page.slug
  
    if (page.type) {
      switch (page.type) {
        case 'process': base = '/process'; break;
        case 'journalEntry': base = '/journal'; break;
        case 'project': base = '/projects'; break;
        default: base = '';
      }
    } else if (page['__typename']) {
      switch (page['__typename']) {
        case 'ContentfulProcess': base = '/process'; break;
        case 'ContentfulJournalEntry': base = '/journal'; break;
        case 'ContentfulProject': base = '/projects'; break;
        default: base = '';
      }
    }
  
    if (slug === 'home') slug = ''
  
    return `${base}/${slug}`
  },
  getPageUrl: page => {
    const path = module.exports.getPagePath(page)
  
    return `https://www.sherpadesign.co${path}`
  }
}
