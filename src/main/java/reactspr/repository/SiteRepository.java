package reactspr.repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import reactspr.domain.Site;

/**
 * Spring Data repository for the Site entity.
 */
@Repository
public interface SiteRepository extends JpaRepository<Site, String> {
}
