import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Test2 = () => {
    //값 변경
    const [count,setCount] = useState(1)
    const ref1=useRef()
    const ref2=useRef()
    const increment = () => {
        // setCount(count+1)

        /* 
            setCount(매개변수 => {
                return값
            })
            return 값 => 상태데이터 count변경이 된다
        */
            setCount(z=>{
                return z+1
            })

        ref1.current.style.backgroundColor='blue'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
    }
    const decrement = () => {
        // setCount(count-1)
        // setCount(count => count+1)
        setCount(state => state+1)

        ref2.current.style.backgroundColor='powderblue'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'

    }

    //처음에 한 번 실행 / 상태값이 업데이트 될 때마다 실행
    
    /* 
    useEffect(()=>{
        console.log('useEffect')
        ref1.current.style.backgroundColor='pink'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
        ref1.current.style.marginBottom='10px'
        ref2.current.style.backgroundColor='gray'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'
        ref2.current.style.marginBottom='10px'

    })
     */
    // 처음에 실행하고 한 번만. 그 이상은 실행되지 않는다
/*     
    useEffect(()=>{
        console.log('useEffect')
        ref1.current.style.backgroundColor='pink'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
        ref1.current.style.marginBottom='10px'
        ref2.current.style.backgroundColor='gray'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'
        ref2.current.style.marginBottom='10px'

    },[])
 */
/* 
    useEffect(()=>{
        console.log('useEffect')
        ref1.current.style.backgroundColor='pink'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
        ref1.current.style.marginBottom='10px'
        ref2.current.style.backgroundColor='gray'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'
        ref2.current.style.marginBottom='10px'

    },[count])
 */
/* 
    //화면에 그려지기 전에 실행됨
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        ref1.current.style.backgroundColor='pink'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
        ref1.current.style.marginBottom='10px'
        ref2.current.style.backgroundColor='gray'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'
        ref2.current.style.marginBottom='10px'

    },)
 */
/* 
    //한번만 실행
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        ref1.current.style.backgroundColor='pink'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
        ref1.current.style.marginBottom='10px'
        ref2.current.style.backgroundColor='gray'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'
        ref2.current.style.marginBottom='10px'

    },[])
 */
    //업데이트 될 때마다 실행
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
        ref1.current.style.backgroundColor='pink'
        ref1.current.style.fontSize='20px'
        ref1.current.style.color='white'
        ref1.current.style.marginBottom='10px'
        ref2.current.style.backgroundColor='gray'
        ref2.current.style.fontSize='20px'
        ref2.current.style.color='white'
        ref2.current.style.marginBottom='10px'

        return () => {
            console.log('뒷정리')
        }
    },[count])

    return (
        <div>
            <h2 ref={ref1}>카운트 {count}</h2>
            <h2 ref={ref2}>useEffect, useLayoutEffect</h2>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement} >감소</button>
            </p>
        </div>
    );
};

export default Test2;

/* 
    useEffect
    useEffect(setup, dependencies?)
    useEffect(콜백함수, [의존값])
    

    1. 처음 실행했을 때
    2. 업데이트 되었을 때
    3. 종료, 로딩이 끝났을 때
    위 세개를 하나로 합쳐서 만들어진 것이 useEffect


    형식1) 추천하지않음 / 한 번만 실행 / 업데이트 할 때마다 실행
    useEffect( ()=>{실행문})

    형식2) **한 번만 실행
    useEffect( ()=>{
        실행문
    },[])

    형식3) ***한 번만 실행 / useState, props가 변경 될 때마다 update 실행
                                   보통은 props 많이 사용함
    useEffect( ()=> {
        실행문
    }, [state,props] )

    형식4) 시간처리 할 때 외 종료시에도 사용
    useEffect( ()=>{
        실행문
        뒷정리
        return ()=> {
            정리내용
            타이머 제거
        }
    } , [props] )

    함수 컴포넌트에서 side effect를 수행할 수 있다. 
    side effect : 부수효과
                  함수의 결과를 반환하는 것 외에 다른 일을 하는 것을 말한다. 
                  사용범위 :
                  데이터 가져오기**, 구독(subscription) 설정하기, 수동으로 React 컴포넌트의 DOM을 수정하는 것까지 이 모든 것이 side effects입니다.
                  1. props를 받아서 갱신(업데이트)
                  2. 외부데이터 api(비동기통신)**
                  3. 시간 (setTimeout, setInterval)
                  4. 외부 라이브러리 사용시
    
    정리 (Clean-up)
    정리(clean-up)가 필요하지 않은 side effect도 있고, 정리(clean-up)가 필요한 effect도 있다. 메모리 누수가 발생하기 때문에 정리가 필요하다. 예를 들어, 외부 데이터에 구독(subscription)을 설정해야 하는 경우 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요하다. 
        누수방지 기본코드 :  return() => {}

    
    useEffect : 화면에 그려진 후 실행 (렌더링 후 실행)
    useLayoutEffect : 화면에 그려지기 전 실행 
                      보통 useEffect에 문제가 생겼을 때 사용한다. 
*/