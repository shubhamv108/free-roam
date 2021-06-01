CREATE TABLE IF NOT EXISTS free_roam.`users` (
    `id`                                            INT(12)         NOT NULL    AUTO_INCREMENT,
    `name`                                          VARCHAR(80),
    `email_id`                                      VARCHAR(256)    NOT NULL,
    `is_email_verified`                             TINYINT(1)      NOT NULL    DEFAULT 0,
    `email_verification_code`                       VARCHAR(8),
    `email_verification_code_expiry`                DATETIME                    DEFAULT,
    `password`                                      VARCHAR(64)     NOT NULL,
    `is_admin`                                      TINYINT(1)      NOT NULL    DEFAULT 0,
    `client_id`                                     INT(12),
    `is_client_admin`                               TINYINT(1)                  DEFAULT 0,
    `is_pending_for_approval_from_client_admin`     TINYINT(1)                  DEFAULT 1,
    `created_on`                                    DATETIME        NOT NULL    DEFAULT NOW(),
    `updated_on`                                    DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_free_roam_users_email_id` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS free_roam.`user_sessions` (
    `id`                INT(12)         NOT NULL    AUTO_INCREMENT,
    `user_id`           INT(12)         NOT NULL,
    `token`             VARCHAR(256)    NOT NULL,
    `created_on`        DATETIME        NOT NULL    DEFAULT NOW(),
    `ttl`               BIGINT          NOT NULL    DEFAULT 86400000,
    `status`            ENUM('ACTIVE','EXPIRED')    DEFAULT 'ACTIVE',
    `ip_address`        VARCHAR(45),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE free_roam.`user_sessions`
    ADD CONSTRAINT  FK_free_roam_user_sessions_user_id
    FOREIGN KEY     (`user_id`)     REFERENCES      `users`     (`id`);


CREATE TABLE IF NOT EXISTS free_roam.`clients` (
    `id`                INT(12)         NOT NULL    AUTO_INCREMENT,
    `domain`            VARCHAR(128),
    `name`              VARCHAR(128),
    `is_organization`   TINYINT(1)      DEFAULT 0,
    `email_id`          VARCHAR(256)    NOT NULL,
    `created_on`        DATETIME        NOT NULL    DEFAULT NOW(),
    `updated_on`        DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_free_roam_clients_domain` (`domain`),
    UNIQUE KEY `UK_free_roam_clients_name` (`name`),
    UNIQUE KEY `UK_free_roam_clients_email_id` (`email_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE free_roam.`clients__user__mapping`
    ADD CONSTRAINT  FK_free_roam_clients__users__mapping_client_id
        FOREIGN KEY     (`client_id`)     REFERENCES      `clients`   (`id`),
    ADD CONSTRAINT  FK_free_roam_clients__users__mapping_user_id
        FOREIGN KEY     (`user_id`)       REFERENCES      `users`     (`id`);


CREATE TABLE IF NOT EXISTS free_roam.`subscription_plans` (
    `id`                                INT(12)         NOT NULL    AUTO_INCREMENT,
    `name`                              VARCHAR(80),
    `validity`                          TIME,
    `query_count`                       INT,
    `status`                            ENUM('ACTIVE', 'INACTIVE'),
    `data_accessibility_start_date`     DATE,
    `data_accessibility_end_date`       DATE,
    `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    `updated_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS free_roam.`client_subscriptions` (
    `id`                                INT(12)         NOT NULL    AUTO_INCREMENT,
    `client_id`                         INT(12)         NOT NULL,
    `subscription_plan_id`              INT(12)         NOT NULL,
    `subscription_start_date`           DATETIME                    DEFAULT NOW(),
    `status`                            ENUM('ACTIVE', 'INACTIVE'),
    `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    `updated_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`)
);

ALTER TABLE free_roam.`client_subscriptions`
    ADD CONSTRAINT  FK_free_roam_client_subscriptions_client_id
        FOREIGN KEY     (`client_id`)                 REFERENCES      `clients`   (`id`),
    ADD CONSTRAINT  FK_free_roam_client_subscriptions_subcription_plan_id
        FOREIGN KEY     (`subcription_plan_id`)       REFERENCES      `subcription_plans`     (`id`);

CREATE TABLE free_roam.`dashboards` (
    `id`                                INT(12)         NOT NULL    AUTO_INCREMENT,
    `user_id`                           INT(12)         NOT NULL,
    `status`                            ENUM('ACTIVE', 'INACTIVE'),
    PRIMARY KEY (`id`)
);

ALTER TABLE free_roam.`dashboards`
    ADD CONSTRAINT  FK_free_roam_dashboards_client_id
        FOREIGN KEY     (`client_id`)                 REFERENCES      `clients`   (`id`);

CREATE TABLE free_roam.`queries` (
    `id`                                BIGINT(20)      NOT NULL    AUTO_INCREMENT,
    `query`                             TEXT            NOT NULL,
    `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`)
);

CREATE TABLE free_roam.`graphs` (
    `id`                                INT(12)         NOT NULL    AUTO_INCREMENT,
    `name`                              VARCHAR(256),
    `query_id`                          BIGINT(20),
    `x_axis_column_name`                VARCHAR(64),
    `y_axis_column_name`                VARCHAR(64),
    `z_axis_column_name`                VARCHAR(64),
    `status`                            ENUM('ACTIVE', 'INACTIVE'),
    `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    `updated_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`)
);

ALTER TABLE free_roam.`graphs`
    ADD CONSTRAINT  FK_free_roam_graphs_query_id
        FOREIGN KEY     (`query_id`)                 REFERENCES      `queries`   (`id`);

CREATE TABLE free_roam.`dashboard__graph__mapping` (
    `dashboard_id`                      INT(12)         NOT NULL,
    `graph_id`                          INT(12)         NOT NULL,
    `name`                              VARCHAR(256),
    `row_position`                      INT(2),
    `column_position`                   INT(2),
    `status`                            ENUM('ACTIVE', 'INACTIVE'),
    `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    `updated_on`                        DATETIME        NOT NULL    DEFAULT NOW()
);

ALTER TABLE free_roam.`dashboard__graph__mapping`
    ADD CONSTRAINT  FK_free_roam_dashboard__graph__mapping_dashboard_id
        FOREIGN KEY     (`dashboard_id`)                 REFERENCES      `dashboards`   (`id`),
    ADD CONSTRAINT  FK_free_roam_client_dashboard__graph__mapping_graph_id
        FOREIGN KEY     (`graph_id`)                     REFERENCES      `graphs`       (`id`);


CREATE TABLE free_roam.`client_query_logs` (
     `id`                                BIGINT(20)      NOT NULL    AUTO_INCREMENT,
     `client_id`                         INT(12)         NOT NULL,
     `user_id`                           INT(12)         NOT NULL,
     `query`                             TEXT            NOT NULL,
     `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
    PRIMARY KEY (`id`)
);

ALTER TABLE free_roam.`client_query_logs`
    ADD CONSTRAINT  FK_free_roam_client_query_logs_client_id
        FOREIGN KEY     (`client_id`)                 REFERENCES      `clients`   (`id`),
    ADD CONSTRAINT  FK_free_roam_client_client_query_logs_user_id
        FOREIGN KEY     (`user_id`)                   REFERENCES      `users`     (`id`);

CREATE TABLE free_roam.`notifications` (
     `id`                                BIGINT(20)      NOT NULL    AUTO_INCREMENT,
     `subject`                           VARCHAR(256),
     `template`                          VARCHAR(512),
     `type`                              ENUM('EMAIL_TEXT', 'EMAIL_HTML', 'SMS', 'FIREBASE', 'WEB')  NOT NULL,
     `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
     `updated_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
     PRIMARY KEY (`id`)
);

CREATE TABLE free_roam.`notification_logs` (
     `id`                                BIGINT(20)      NOT NULL    AUTO_INCREMENT,
     `notification_id`                   BIGINT(20),
     `server_message_id`                 BIGINT(20),
     `subject`                           VARCHAR(256),
     `body`                              VARCHAR(512),
     `sent_to`                           VARCHAR(128)    NOT NULL,
     `created_on`                        DATETIME        NOT NULL    DEFAULT NOW(),
     PRIMARY KEY (`id`)
);

ALTER TABLE free_roam.`notification_logs`
    ADD CONSTRAINT  FK_free_roam_notification_logs_notification_id
        FOREIGN KEY     (`notification_id`)                 REFERENCES      `notifications`   (`id`);

