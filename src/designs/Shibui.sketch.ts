import { Color, GradientStop, LinearGradient, Point2D } from "@diez/prefabs";

const shibuiColors = {
    fuss: Color.rgba(233, 52, 242, 1),
    tiger: Color.rgba(241, 93, 74, 1),
    marigold: Color.rgba(255, 172, 57, 1),
    clover: Color.rgba(163, 206, 50, 1),
    cyan: Color.rgba(4, 182, 203, 1),
    amethyst: Color.rgba(137, 52, 255, 1),
    seattle: Color.rgba(200, 203, 207, 1),
    ivory: Color.rgba(250, 251, 252, 1),
    graphite: Color.rgba(34, 43, 57, 1),
    midnight: Color.rgba(7, 14, 24, 1)
};

const shibuiGradients = {
    untitledColor: new LinearGradient({ stops: [GradientStop.make(0, Color.rgba(255, 255, 255, 0.5)), GradientStop.make(1, Color.rgba(0, 0, 0, 0.5))], start: Point2D.make(0.5, 0), end: Point2D.make(0.5, 1) })
};

export const shibuiTokens = {
    colors: shibuiColors,
    gradients: shibuiGradients
};
