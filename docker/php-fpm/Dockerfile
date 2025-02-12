FROM phpdockerio/php:8.2-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

RUN apt-get update; \
    apt-get -y --no-install-recommends install \
        git \
        php8.2-imagick \
        php8.2-mcrypt \
        php8.2-memcached \
        php8.2-mongodb \
        php8.2-mysql \
        php8.2-oauth \
        php8.2-redis \
        php8.2-soap \
        php8.2-uuid \
        php8.2-xdebug \
        php8.2-xmlrpc \
        php8.2-gd \
        screen \
        vim \
        cron \
        supervisor \
        keychain; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /app $user
RUN mkdir -p /app/.composer

ENV TZ=Europe/Rome
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# USER $user

#COPY ./code /app

WORKDIR "/backend"

RUN chown -R www-data:$user /app
# install ssh key (and openssh utils)
