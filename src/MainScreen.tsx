import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Appearance, useColorScheme } from 'react-native';
import SVGPlayer from './react-native-svgator-player';
import SVG from './svg/Shapes';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';


const MainScreen = () => {
    const svgPlayerRef = useRef<SVGPlayer>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSeek, setCurrentSeek] = useState(0);
    const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

    const colors = colorScheme === 'dark' ? {
        backgroundColor: '#333',
        buttonBackgroundColor: '#555',
        buttonColor: '#00A86B',
        textColor: '#fff'
    } : {
        backgroundColor: '#fff',
        buttonBackgroundColor: '#ccc',
        buttonColor: '#00A86B',
        textColor: '#000'
    };

    useEffect(() => {
        const handleKeyframe = async (offset: number) => {
            const duration = await svgPlayerRef.current?.getDurationAsync();
            if (duration !== undefined) {
                const percentage = offset / duration * 100;
                setCurrentSeek(percentage);
            }
        };

        svgPlayerRef.current?.on('keyframe', handleKeyframe);

        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setColorScheme(colorScheme);
        });

        return () => {
            svgPlayerRef.current?.off('keyframe', handleKeyframe);
            subscription.remove();
        };
    }, []);

    const onPlay = () => {
        setIsPlaying(true);
        svgPlayerRef.current?.play();
    };

    const onPause = () => {
        setIsPlaying(false);
        svgPlayerRef.current?.pause();
    };

    const onLoop = () => {
        svgPlayerRef.current?.set('speed', 0.1);
        svgPlayerRef.current?.set('iterations', 5);
    };

    const onRestart = () => {
        setIsPlaying(true);
        svgPlayerRef.current?.restart();
    };

    const onReverse = () => {
        setIsPlaying(true);
        svgPlayerRef.current?.reverse();
    };

    const onStop = () => {
        setIsPlaying(false);
        svgPlayerRef.current?.stop();
    };

    const onSeek = (value: number) => {
        setCurrentSeek(value);
        svgPlayerRef.current?.seek(value);
    };

    const onSeekTo = () => {
        svgPlayerRef.current?.seekTo(500);
    };

    const onDumpLogs = async () => {
        console.log('currentTime', await svgPlayerRef.current?.getCurrentTimeAsync());
        console.log('duration', await svgPlayerRef.current?.getDurationAsync());
        console.log('hasEnded', await svgPlayerRef.current?.getHasEndedAsync());
        console.log('isBackwards', await svgPlayerRef.current?.getIsBackwardsAsync());
        console.log('isInfinite', await svgPlayerRef.current?.getIsInfiniteAsync());
        console.log('isPlaying', await svgPlayerRef.current?.getIsPlayingAsync());
        console.log('isReversed', await svgPlayerRef.current?.getIsReversedAsync());
        console.log('isRollingBack', await svgPlayerRef.current?.getIsRollingBackAsync());
        console.log('playerState', await svgPlayerRef.current?.getPlayerStateAsync());
        console.log('totalTime', await svgPlayerRef.current?.getTotalTimeAsync());
        console.log('direction', svgPlayerRef.current?.direction);
        console.log('fill', svgPlayerRef.current?.fill);
        console.log('fps', svgPlayerRef.current?.fps);
        console.log('isAlternate', svgPlayerRef.current?.isAlternate);
        console.log('iterations', svgPlayerRef.current?.iterations);
        console.log('speed', svgPlayerRef.current?.speed);
    };

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: colors.backgroundColor }}>
            <SVGPlayer ref={svgPlayerRef} svg={SVG} />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <Button
                        title={isPlaying ? "Pause" : "Play"}
                        onPress={isPlaying ? onPause : onPlay}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name={isPlaying ? "pause" : "play"} size={15} color={colors.textColor} />
                            </View>
                        }
                    />
                    <Button
                        title="Loop"
                        onPress={onLoop}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name="repeat" size={15} color="white" />
                            </View>
                        }
                    />
                    <Button
                        title="Dump Logs"
                        onPress={onDumpLogs}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name="bug" size={15} color="white" />
                            </View>
                        }
                    />
                    <Button
                        title="Restart"
                        onPress={onRestart}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name="refresh" size={15} color="white" />
                            </View>
                        }
                    />
                </View>
                <View style={styles.buttonRow}>
                    <Button
                        title="Reverse"
                        onPress={onReverse}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name="undo" size={15} color="white" />
                            </View>
                        }
                    />
                    <Button
                        title="Stop"
                        onPress={onStop}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name="stop" size={15} color="white" />
                            </View>
                        }
                    />
                    <Button
                        title="SeekTo 500ms"
                        onPress={onSeekTo}
                        buttonStyle={{ ...styles.button, backgroundColor: colors.buttonBackgroundColor }}
                        titleStyle={{ color: colors.textColor }}
                        icon={
                            <View style={{ paddingRight: 10 }}>
                                <Icon name="fast-forward" size={15} color="white" />
                            </View>
                        }
                    />
                </View>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={onSeek}
                    value={currentSeek}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#555',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonPlaying: {
        backgroundColor: '#00A86B',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonTitle: {
        color: '#fff',
        marginLeft: 10,
    },
});

export default MainScreen;
