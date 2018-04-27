describe('#isNaN()', function () {
    it(`outils.isNaN(NaN) should return true`, function () {
        assert(outils.isNaN(NaN))
    })
    it(`outils.isNaN('value') should return false`, function () {
        assert.notEqual(outils.isNaN(NaN))
    })
})