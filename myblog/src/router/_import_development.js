module.exports = file => {
    try {
        return require('@/views/' + file + '.vue').default
    } catch (err) {
    	//console.log('err',err)
        return require('@/views/errorPage/index.vue').default
    }
}
