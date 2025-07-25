var agent = window.navigator.userAgent.toLowerCase();
var appName = window.navigator.appName.toLowerCase();

if ((appName === 'netscape' && agent.indexOf('trident') !== -1) || agent.indexOf('msie') !== -1) {
    window.location.href = '/static/IE/index.html';
}