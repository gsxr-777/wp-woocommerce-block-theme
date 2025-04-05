const { registerBlockType } = wp.blocks;

registerBlockType('gsxr777/dark-mode', {
    title: 'GSXR777 Dark Mode',
    icon: 'admin-appearance',
    category: 'widgets',
    edit: () => {
        // Отображение блока в редакторе Gutenberg с иконкой Луны
        return wp.element.createElement(
            'div',
            { className: 'gsxr777-dark-mode-editor' },
            wp.element.createElement('svg', {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '2',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                children: wp.element.createElement('path', {
                    d: 'M12 2C7.03 2 3 6.03 3 10s4.03 8 9 8c1.56 0 3.03-.48 4.23-1.29a8.976 8.976 0 0 0 1.27-3.71c-.79 1.9-2.48 3.29-4.5 3.29-2.76 0-5-2.24-5-5s2.24-5 5-5c1.33 0 2.57.54 3.44 1.42C19.51 6.77 15.92 2 12 2z',
                }),
            })
        );
    },
    save: () => {
        // Сохранение HTML структуры переключателя для фронтенда
        return wp.element.createElement(
            'div',
            { id: 'gsxr777-dark-mode-toggle', className: 'gsxr777-dark-mode' },
            wp.element.createElement('label', { className: 'dark-mode-toggle' }, [
                wp.element.createElement('input', {
                    type: 'checkbox',
                    id: 'dark-mode-switch',
                    className: 'dark-mode-checkbox',
                }),
                wp.element.createElement('span', { className: 'dark-mode-slider' }, [
                    // Солнце (SVG с лучами)
                    wp.element.createElement('span', { className: 'sun-icon' }, [
                        wp.element.createElement('svg', {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '24',
                            height: '24',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            'stroke-width': '2',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            children: [
                                wp.element.createElement('circle', {
                                    cx: '12',
                                    cy: '12',
                                    r: '5',
                                    stroke: 'currentColor',
                                }),
                                // Лучи солнца
                                ...Array.from({ length: 12 }).map((_, i) => {
                                    const angle = (i * 30) * Math.PI / 180; // 12 лучей через 30 градусов
                                    const x1 = 12 + Math.cos(angle) * 5;
                                    const y1 = 12 + Math.sin(angle) * 5;
                                    const x2 = 12 + Math.cos(angle) * 8;
                                    const y2 = 12 + Math.sin(angle) * 8;

                                    return wp.element.createElement('line', {
                                        key: i,
                                        x1: x1,
                                        y1: y1,
                                        x2: x2,
                                        y2: y2,
                                        stroke: 'currentColor',
                                        strokeWidth: '2',
                                    });
                                })
                            ],
                        }),
                    ]),
                    // Луна (SVG)
                    wp.element.createElement('span', { className: 'moon-icon' }, [
                        wp.element.createElement('svg', {
                            xmlns: 'http://www.w3.org/2000/svg',
                            width: '24',
                            height: '24',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            stroke: 'currentColor',
                            'stroke-width': '2',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            children: wp.element.createElement('path', {
                                d: 'M12 2C7.03 2 3 6.03 3 10s4.03 8 9 8c1.56 0 3.03-.48 4.23-1.29a8.976 8.976 0 0 0 1.27-3.71c-.79 1.9-2.48 3.29-4.5 3.29-2.76 0-5-2.24-5-5s2.24-5 5-5c1.33 0 2.57.54 3.44 1.42C19.51 6.77 15.92 2 12 2z',
                            }),
                        }),
                    ]),
                ]),
            ])
        );
    },
});
