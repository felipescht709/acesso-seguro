export function inertiaMiddleware(htmlTemplate) {
  return (req, res, next) => {
    const sharedProps = {};

    const render = (component, props = {}) => {
      const page = {
        component,
        props: { ...sharedProps, ...props },
        url: req.originalUrl,
        version: '1',
      };

      if (req.headers['x-inertia']) {
        res.setHeader('X-Inertia', 'true');
        res.setHeader('Vary', 'X-Inertia');
        return res.json(page);
      }

      return res.send(htmlTemplate(page));
    };

    res.inertia = render;
    res.inertia.render = render;
    res.inertia.share = (data) => Object.assign(sharedProps, data);

    next();
  };
}