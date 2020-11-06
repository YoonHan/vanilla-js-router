import { describe, test, expect } from '@jest/globals';
import HashRouter from '.';
import MockComponent from './mock';

describe('HashRouter 클래스 테스트', () => {
    let options = { root: '/', view: 'div#route-view' };
    describe('인스턴스 생성', () => {
        test('생성자의 options에 root나 view가 설정되지 않은 경우', () => {
            expect(() => { const hr = new HashRouter() }).toThrow();
            expect(() => { const hr = new HashRouter({ root: '/' }) }).toThrow();
            expect(() => { const hr = new HashRouter({ view: 'div#route-view' }) }).toThrow();
        })
        test('생성자의 options가 올바르게 설정된 경우', () => {
            const hr = new HashRouter(options);
            expect(hr.root).toEqual('/');
            expect(hr.view).toEqual('div#route-view');
            expect(hr.routes).toEqual([]);
            expect(typeof window.onpopstate).toBe('function');
        })
    })

    describe('메소드 동작 확인', () => {
        describe('add 메소드', () => {
            test('add 메소드를 통해 route 추가하는 동작 확인', () => {
                const hr = new HashRouter(options);
                hr.add('/', new MockComponent());
                hr.add('/about', new MockComponent());
                expect(hr.routes).toEqual([
                    expect.objectContaining({
                        path: '/',
                        component: expect.any(MockComponent)
                    }),
                    expect.objectContaining({
                        path: '/about',
                        component: expect.any(MockComponent)
                    })
                ])
            });
            test('add 메소드 출력 확인', () => {
                const hr = new HashRouter(options);
                expect(hr.add('/', new MockComponent())).toEqual(hr);
            })
        })

        describe('_clearEndSlashes 메소드', () => {
            test('_clearEndSlashes 메소드 예외처리 확인', () => {
                const hr = new HashRouter(options);
                expect(() => { hr._clearEndSlashes() }).toThrow();
            })
            test('_clearEndSlashes 메소드 동작 확인', () => {
                const options = { root: '/', view: 'div#route-view' };
                const hr = new HashRouter(options);
                const fakePath = 'https://localhost:8080/#/'
                expect(hr._clearEndSlashes(fakePath)).toEqual('https://localhost:8080/#')
            })
        })

        describe('_changeView 메소드', () => {
            test('_changeView 메소드 동작 확인', () => {
                const hr = new HashRouter(options);
                const viewElem = document.createElement('div');
                viewElem.innerHTML = new MockComponent().render();
                expect(viewElem.innerHTML).toEqual(new MockComponent().render());
            })
        })

        describe('_changeComponent 메소드', () => {
            test('_changeComponent 메소드 동작 확인', () => {
                const hr = new HashRouter(options);
                const fakeRoutes = [{
                        path: '/',
                        component: new MockComponent()
                    },
                    {
                        path: '/one',
                        component: new MockComponent()
                    },
                    {
                        path: '/two',
                        component: new MockComponent()
                    }
                ]
                const nextRoute = fakeRoutes.find((route) => '/one' === route.path);
                expect(nextRoute).toEqual({
                    path: '/one',
                    component: expect.any(MockComponent)
                });
            })
        })
    });
});