






function generateHashtag (str) {
    if(!str || str.length < 1) return false;
    
    var r = '#' + str.split(' ').map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140?false:r;
 }