export const getBgColor = () => {
    const bgarr = ["#b73e3e", "#7f147f", "#7f167f", "#735f32", "#1d2569", "#285430"]
    const randomBg = Math.floor(Math.random() * bgarr.length);
    const color = bgarr[randomBg]

    return color;
}