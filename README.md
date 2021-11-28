# Singleton-pattern

## 디자인패턴

디자인 패턴이란 반복된 문제에 대한 재사용 가능한 해결책입니다. 디자인 패턴이라는 용어는 정의가 매우 광범위해 어플리케이션 여러 도메인에서 사용할 수 있다. 디자인 패턴은 GoF의 디자인패턴에서 유래했습니다.

객체지향 디자인패턴을 JS에 적용하는 것은 고전적인 객체 지향 언어에서처럼 선형적으로 형식적이지 않습니다. JS는 객체지향적이고 프로토타입 기반이며  동적타이밍을 가지고 있습니다. 함수를 일급객체로하여 함수형 프로그래밍을 허용합니다. 이러한 특징은 JS를 다양한 기능이 가능한 언어로 만들지만 동시에 프로그래밍 스타일, 규칙, 기술에 이르기까지 궁긍적으로 생태계 패턴을 분열시킨다.

JS를 사용하면 동일한 결과를 얻을 수 있는 방법이 많아, 문제에 접근하는데 자신만의 효과적인 방식을 갖게 됩니다. 이를 보여주는 것이 JS의 프레임워크와 독보적인 라이브러리들입니다. JS에서는 전통적인 디자인 패턴을 구현할 방법이 많아서 전통적인 객체지향 구현이 더 이상 적용되지 않습니다.

JS는 실제 클래스나 추상 인터페이스를 가지고 있지 않습니다. 그래서 디자인 패턴의 전통적인 구현 자체가 불가능힌 경우도 있습니다. 그러나 **각 패턴의 기본에 있는 근본적인 아이디어, 당면한 문제, 해결방식의 핵심 개념은 바뀌지 않습니다**.

## 싱글톤

객체지향 프로그래밍에서 가장 많이 사용되는 패턴입니다. 싱글톤 패턴의 목적은 클래스의 인스턴스가 하나만 존재하도록 접근을 중앙 집중화하는 것입니다. 애플리케이션의 모든 컴포넌트가 단일 인스턴스를 사용하는데는 몇 가지 이유가 있습니다.

- 상태 정보의 공유
- 리소스 사용의 최적화
- 리소스에 대한 접근 동기화

```js
  class Server {
    public app: express.Application;
    constructor() {
      const app :express.Application = express();
      this.app = app;
    }

    private setRoute() {
      this.app.use('/cats', carRouter)
    }

    private setMiddleware() {
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json());
      
      this.setRoute();
      
      this.app.use((req, res, next) => {
        console.log('middleware');
        res.send({ error: '404 NOT FOUND' });
      });
    }

    public listen() {
      this.setMiddleware();
      this.app.listen(4000,() => {
        console.log('server is running');
      });
    }
  }

  function init() {
    const server = new Server();
    server.listen();
  }

  init();
``