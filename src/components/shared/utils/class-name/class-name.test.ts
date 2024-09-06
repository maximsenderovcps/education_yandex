import {clName} from './class-name'

describe('maker classes', ()=>{
    test('one argument', ()=>{
        expect(clName('first'))
            .toBe('first')
    })

    test('two arguments', ()=>{
        expect(clName('first', ['two', 'any_class']))
            .toBe('first two any_class')
    })

    test('three arguments', ()=>{
        expect(clName('first', ['two'], {
            'close': false,
            'pending': true})
        )
            .toBe('first two pending')
    })
})
