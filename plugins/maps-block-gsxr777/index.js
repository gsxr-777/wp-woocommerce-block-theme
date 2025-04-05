wp.blocks.registerBlockType('maps-block-gsxr777/map-block', {
  title: 'Map Block GSXR777',
  icon: 'location',
  category: 'embed',
  attributes: {
    mapUrl: {
      type: 'string',
      default: '',
    },
    frameWidth: {
      type: 'string',
      default: '100%',
    },
    frameHeight: {
      type: 'string',
      default: '250',
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;

    function onChangeMapUrl(newUrl) {
      setAttributes({ mapUrl: newUrl });
    }

    function onChangeFrameWidth(newWidth) {
      setAttributes({ frameWidth: newWidth });
    }

    function onChangeFrameHeight(newHeight) {
      setAttributes({ frameHeight: newHeight });
    }

    return wp.element.createElement(
      'div',
      null,
      wp.element.createElement(
        wp.blockEditor.InspectorControls,
        null,
        wp.element.createElement(
          wp.components.PanelBody,
          { title: 'Map Settings', initialOpen: true },
          wp.element.createElement(wp.components.TextControl, {
            label: 'Map URL',
            value: attributes.mapUrl,
            onChange: onChangeMapUrl,
          })
        )
      ),
      wp.element.createElement(
        'div',
        { className: 'maps-block-gsxr777-settings' },
        wp.element.createElement(
          'p',
          null,
          'Enter Map URL:'
        ),
        wp.element.createElement('textarea', {
          style: { width: '100%', resize: 'vertical' },
          rows: 2,
          value: attributes.mapUrl,
          onChange: (event) => onChangeMapUrl(event.target.value),
          placeholder: 'Enter map URL',
        }),
        wp.element.createElement(
          'p',
          null,
          'Frame Settings (width and height):'
        ),
        wp.element.createElement('input', {
          type: 'text',
          value: attributes.frameWidth,
          onChange: (event) => onChangeFrameWidth(event.target.value),
          placeholder: 'Frame width (e.g., 100% or 600px)',
        }),
        wp.element.createElement('input', {
          type: 'text',
          value: attributes.frameHeight,
          onChange: (event) => onChangeFrameHeight(event.target.value),
          placeholder: 'Frame height (e.g., 250 or 450px)',
        })
      ),
      attributes.mapUrl &&
        wp.element.createElement('iframe', {
          src: attributes.mapUrl,
          width: attributes.frameWidth,
          height: attributes.frameHeight,
          frameBorder: '0',
          allowFullScreen: 'true',
          style: { position: 'relative', marginTop: '20px' },
          loading: 'lazy',
          referrerPolicy: 'no-referrer-when-downgrade',
        })
    );
  },
  save: function (props) {
    const { mapUrl, frameWidth, frameHeight } = props.attributes;

    return wp.element.createElement(
      'div',
      null,
      wp.element.createElement('iframe', {
        src: mapUrl,
        width: frameWidth,
        height: frameHeight,
        frameBorder: '0',
        allowFullScreen: 'true',
        style: { position: 'relative' },
        loading: 'lazy',
        referrerPolicy: 'no-referrer-when-downgrade',
      })
    );
  },
});
