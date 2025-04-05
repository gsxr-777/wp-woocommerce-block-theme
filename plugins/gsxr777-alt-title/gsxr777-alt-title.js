(function (wp) {
    const { registerBlockType } = wp.blocks;
    const { InspectorControls, MediaUpload, MediaUploadCheck } = wp.blockEditor || wp.editor;
    const { PanelBody, TextControl, Button } = wp.components;

    registerBlockType('gsxr777/alt-title-block', {
        title: 'Alt Title Image Block',
        icon: 'format-image',
        category: 'media',
        attributes: {
            imageUrl: { type: 'string' },
            imageAlt: { type: 'string', default: '' },
            imageTitle: { type: 'string', default: '' },
        },
        edit({ attributes, setAttributes }) {
            const { imageUrl, imageAlt, imageTitle } = attributes;

            const onSelectImage = (media) => {
                setAttributes({
                    imageUrl: media.url,
                    imageAlt: media.alt || media.title || 'Default Alt',
                    imageTitle: media.title || 'Default Title',
                });
            };

            return (
                <>
                    <InspectorControls>
                        <PanelBody title="Image Settings">
                            <TextControl
                                label="Alt Text"
                                value={imageAlt}
                                onChange={(value) => setAttributes({ imageAlt: value })}
                            />
                            <TextControl
                                label="Title Text"
                                value={imageTitle}
                                onChange={(value) => setAttributes({ imageTitle: value })}
                            />
                        </PanelBody>
                    </InspectorControls>
                    <div className="gsxr777-alt-title-block">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button onClick={open} isPrimary>
                                        {imageUrl ? 'Change Image' : 'Select Image'}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {imageUrl && (
                            <div className="gsxr777-image-wrapper">
                                <img
                                    src={imageUrl}
                                    alt={imageAlt}
                                    title={imageTitle}
                                    style={{ maxWidth: '100%' }}
                                />
                            </div>
                        )}
                    </div>
                </>
            );
        },
        save({ attributes }) {
            const { imageUrl, imageAlt, imageTitle } = attributes;
            return (
                <div className="gsxr777-alt-title-block">
                    {imageUrl && (
                        <div className="gsxr777-image-wrapper">
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                title={imageTitle}
                                style={{ maxWidth: '100%' }}
                            />
                        </div>
                    )}
                </div>
            );
        },
    });
})(window.wp);
