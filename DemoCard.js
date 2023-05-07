import React, { Component } from 'react';
import {
    ViroText,
    ViroImage,
    ViroFlexView,
} from '@viro-community/react-viro';

export default function DemoCard(props) {
    const demoText = props.demoText
    return (
        <ViroFlexView borderRadius={30} width={2.1} position={[0, -5, 0]} rotation={[-90, 0, 0]} height={3} backgroundColor={'pink'} style={{ flexDirection: 'column' }} >
            <ViroFlexView backgroundColor={'#092336'} style={{ flex: 0.1, flexDirection: 'row' }} >
                <ViroFlexView backgroundColor={'#092336'} style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
                    <ViroText
                        style={{ flex: 0.4, color: 'white', marginLeft: .1, }}
                        text={'Tech People'}
                        fontSize={12} />
                    <ViroText
                        style={{ flex: 0.4, color: 'white', marginLeft: .1, }}
                        text={"100 HP"}
                        fontSize={12} />
                </ViroFlexView>
            </ViroFlexView>
            <ViroFlexView backgroundColor={'white'} style={{ flex: 0.6 }} >
                <ViroImage borderRadius={30} style={{ flex: 1 }} source={{ uri: 'https://lh3.googleusercontent.com/9BdThza876Ojf5bkVg5yafoEsR0aABZ7cT1jtsWeAxXuWA4wFMXAJOHoST-3DVTKNqLp0Ir_ia3g9zS0k_u-JbImNzMOLoDT553U=s0' }} />
            </ViroFlexView>
            <ViroFlexView backgroundColor={'#239bac'} style={{ flex: 0.3, flexDirection: 'column' }} >
                <ViroText
                    style={{ flex: 0.3, color: 'white', marginLeft: .2 }}
                    text={'Demo'}
                    fontSize={12} />
                <ViroText
                    style={{ flex: 0.7, color: 'white', marginLeft: .2 }}
                    text={demoText}
                    fontSize={12} />
            </ViroFlexView>
        </ViroFlexView>
    );
}