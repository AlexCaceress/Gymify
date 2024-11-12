import { StyleSheet, ImageStyle } from 'react-native';
import { Image, type ImageSource } from "expo-image";

interface CustomImageStyles {
    image?: ImageStyle;
}

type Props = {
    selectedImage?: string;
    customStyle?: ImageStyle;
}

const PlaceholderImage = require('@/assets/images/alex-image.jpeg');

export default function ImageViewer({ selectedImage, customStyle }: Props) {
    const imageSource = selectedImage !== "" ? { uri: selectedImage } : PlaceholderImage;

    return <Image source={imageSource} style={[styles.image, customStyle]} />;
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 20
    },
});